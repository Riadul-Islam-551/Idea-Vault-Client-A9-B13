import IdeaCard from "@/component/IdeaCard";
import IdeasContainer from "@/component/IdeasContainer";
import React from "react";

const IdeaPage = async () => {
  const res = await fetch("http://localhost:5000/ideas");
  const ideaData = await res.json();

  console.log(ideaData);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-12 mb-4">
        Explore Ideas
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Choose your startup idea, explore it, interact with the idea
      </p>
      <IdeasContainer ideas={ideaData}></IdeasContainer>
    </div>
  );
};

export default IdeaPage;
