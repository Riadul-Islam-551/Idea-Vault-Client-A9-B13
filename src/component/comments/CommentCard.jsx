import React from "react";

const CommentCard = ({ comment }) => {
    console.log(comment)
    const {_id, userName, userId, time, image, idea, comment:commentInput,  } = comment
  return <div className="border ">{commentInput}</div>;
};

export default CommentCard;
