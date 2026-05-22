import MyInteractionCommentCard from "@/component/comments/MyInteractionCommentCard";
import { auth } from "@/lib/auth";
import { ArrowLeft } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const userId = session?.user?.id;
  // console.log("my interaction", userId);

  //token for server component
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const res = await fetch(
    `http://localhost:5000/comments/myInteraction/${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const myComment = await res.json();

  // console.log(myComment);
  // const { ideaTitle, comment, time, ideaImage } = myComment;

  return (
    <div className="container mx-auto py-12 px-3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-7 ">
        My Interactions !!
      </h1>
      <div>
        {myComment.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 min-h-[70vh] ">
            {myComment.map((commentData) => (
              <MyInteractionCommentCard
                key={commentData._id}
                commentData={commentData}
              >
                {" "}
              </MyInteractionCommentCard>
            ))}
          </div>
        ) : (
          <div className="min-h-100 flex justify-center items-center flex-col border border-gray-300 rounded-2xl px-4">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 ">
              You don&apos;t make any Interactions{" "}
            </h1>
            <Link href={"/ideas"}>
              <Button
                variant="outline"
                className={
                  "text-orange-500 border-orange-500 rounded space-x-1"
                }
              >
                <ArrowLeft></ArrowLeft>Explore Idea
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInteractionsPage;
