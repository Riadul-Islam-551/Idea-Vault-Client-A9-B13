import React from "react";
import IdeaCard from "./IdeaCard";

const TrendingIdea = async () => {
  const res = await fetch("http://localhost:5000/ideas?limit=3");
  const ideaData = await res.json();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-36  mb-12  ">
        Trending Ideas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch ">
        {ideaData.map((idea) => (
          <IdeaCard key={idea._id} idea={idea}></IdeaCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingIdea;
