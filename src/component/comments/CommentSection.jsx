import { Button } from "@heroui/react";
import React from "react";
import { CommentModal } from "./CommentModal";

const CommentSection = ({ ideaDetails }) => {
  
  return (
    <div className="w-full p-3 rounded-xl bg-base-200 border border-gray-300 mt-9 ">
        <h1 className="text-lg font-bold ">Give your feedback</h1>
      {/* comment body  */}
      <div className="comment-body min-h-10"></div>
      {/* comment footer  */}
      <div className="comment-footer flex justify-end ">
        <CommentModal ideaDetails={ideaDetails}></CommentModal>
      </div>
    </div>
  );
};

export default CommentSection;
