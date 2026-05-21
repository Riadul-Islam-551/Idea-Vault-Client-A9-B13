import MyInteractionCommentCard from "@/component/comments/MyInteractionCommentCard";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const userId = session?.user?.id;
  // console.log("my interaction", userId);

  const res = await fetch(
    `http://localhost:5000/comments/myInteraction/${userId}`,
  );
  const myComment = await res.json();

  // console.log(myComment);
  // const { ideaTitle, comment, time, ideaImage } = myComment;

  return (
    <div className="container mx-auto py-12 px-3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-7 ">
        My Interactions !!
      </h1>
      <div className="grid grid-cols-1 gap-7">
        {myComment.map((commentData) => (
          <MyInteractionCommentCard key={commentData._id} commentData={commentData}> </MyInteractionCommentCard>
        ))}
      </div>
    </div>
  );
};

export default MyInteractionsPage;
