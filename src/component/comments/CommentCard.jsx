import { username } from "better-auth/plugins";
import Image from "next/image";
import React from "react";

const CommentCard = ({ comment }) => {
  console.log(comment);
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
      </div>
    </div>
  );
};

export default CommentCard;
