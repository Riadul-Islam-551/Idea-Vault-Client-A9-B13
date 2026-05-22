import { Button } from "@heroui/react";
import React from "react";
import { CommentModal } from "./CommentModal";
import CommentCard from "./CommentCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const CommentSection = async ({ ideaDetails }) => {
  const ideaId = ideaDetails._id;
  //   console.log(ideaId);

  //token for server component
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${ideaId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const comments = await res.json();
  //   console.log(comments);

  return (
    <div className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#212121]     border border-gray-300 dark:border-gray-700 mt-9 ">
      <h1 className="text-lg font-bold ">Give your feedback</h1>
      {/* comment body  */}
      <div className="comment-body min-h-10 grid grid-cols-1 gap-4 my-4 ">
        {comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment}></CommentCard>
        ))}
      </div>
      {/* comment footer  */}
      <div className="comment-footer flex justify-end ">
        <CommentModal ideaDetails={ideaDetails}></CommentModal>
      </div>
    </div>
  );
};

export default CommentSection;
