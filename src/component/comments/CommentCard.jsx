import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { username } from "better-auth/plugins";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import EditComment from "./EditComment";

const CommentCard = async ({ comment }) => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const commenter = session?.user?.id;
  // console.log(commenter);
  // console.log(comment);
  const {
    _id,
    userName,
    userId,
    time,
    image,
    idea,
    comment: commentInput,
  } = comment;
  return (
    <div className="flex justify-start items-start gap-3 bg-base-100 rounded-xl p-2 ">
      <Image
        src={image}
        alt={userName}
        width={50}
        height={50}
        className="rounded-full"
      ></Image>
      <div>
        <div className="flex justify-start items-end gap-3">
          <h1 className="font-semibold">{userName}</h1>
          <p className="text-xs text-gray-600">{time}</p>
        </div>
        <p className="text-sm text-gray-600">{commentInput}</p>
        <div>
          {commenter === userId ? (
            <div className="space-x-2 mt-2 ">
              <EditComment comment={comment} />
              <Button variant="tertiary" className={"text-red-500 text-sm"}>
                Delete
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
