"use client";
import React, { useState } from "react";
import IdeaCard from "./IdeaCard";
import BulbAnimation from "./BulbAnimation";

const IdeasContainer = ({ ideas }) => {
  const [searchIdea, setSearchIdea] = useState("");

  const filteredIdeas = ideas.filter((idea) =>
    idea.title.toLowerCase().includes(searchIdea.toLowerCase()),
  );
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search ideas..."
          value={searchIdea}
          onChange={(e) => setSearchIdea(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map((idea) => <IdeaCard key={idea._id} idea={idea} />)
        ) : (
          <div className="min-h-75 col-span-full my-6  flex flex-col items-center justify-center gap-4  border border-gray-300 rounded-2xl ">
            <BulbAnimation></BulbAnimation>
            <p className="text-center  text-gray-500">No ideas found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeasContainer;
