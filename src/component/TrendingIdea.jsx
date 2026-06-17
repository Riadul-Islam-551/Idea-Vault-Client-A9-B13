import React from "react";
import IdeaCard from "./IdeaCard";

const TrendingIdea = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas?limit=3`,
  );
  const ideaData = await res.json();

  return (
    <div className="container mx-auto px-4 mb-20">
      <div className="text-center mt-36 mb-12">
        <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Live Trending
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
          Trending Ideas
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm max-w-md mx-auto leading-relaxed">
          Discover the most talked-about startup concepts from our global
          community of innovators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {ideaData.map((idea, index) => (
          <IdeaCard key={idea._id} idea={idea} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendingIdea;
