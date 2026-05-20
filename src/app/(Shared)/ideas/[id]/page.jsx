import React from "react";

const DetailedIdea = async ({ params }) => {
  const { id } = await params;
  console.log("id", id);

  //   const {
  //     _id,
  //     title,
  //     tag,
  //     solution,
  //     shortDescription,
  //     problem,
  //     price,
  //     imageUrl,
  //     detailedDescription,
  //     createdBy,
  //     category,
  //     audience,
  //   } = idea;

  return <div>detailed idea</div>;
};

export default DetailedIdea;
