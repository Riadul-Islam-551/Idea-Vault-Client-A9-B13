import { Button } from "@heroui/react";
import React from "react";
import { CommentModal } from "./CommentModal";
import CommentCard from "./CommentCard";

const CommentSection = async ({ ideaDetails }) => {
  const ideaId = ideaDetails._id;
  //   console.log(ideaId);
  const res = await fetch(`http://localhost:5000/comments/${ideaId}`);
  const comments = await res.json();
  //   console.log(comments);

  return (
    <div className="w-full p-3 rounded-xl bg-base-200 border border-gray-300 mt-9 ">
      <h1 className="text-lg font-bold ">Give your feedback</h1>
      {/* comment body  */}
      <div className="comment-body min-h-10 grid grid-cols-1 gap-4">
        {comments.map((comment) => (<CommentCard key={comment._id} comment={comment}></CommentCard>))}
      </div>
      {/* comment footer  */}
      <div className="comment-footer flex justify-end ">
        <CommentModal ideaDetails={ideaDetails}></CommentModal>
      </div>
    </div>
  );
};

export default CommentSection;
