import IdeaCard from "@/component/IdeaCard";
import React from "react";

const IdeaPage = async () => {
  const res = await fetch("http://localhost:5000/ideas");
  const ideaData = await res.json();

  console.log(ideaData);
  return (
    <div className="container mx-auto px-7">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-12 mb-4">
        Explore Ideas
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Choose your startup idea, explore it, interact with the idea
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ideaData.map((idea) => {
          <IdeaCard key={idea._id} idea={idea}></IdeaCard>
        })}
      </div>
    </div>
  );
};

export default IdeaPage;
