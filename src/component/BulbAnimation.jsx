// "use client";

import React from "react";

const BulbAnimation = () => {
  return (
    <div className="flex items-center justify-center h-20 ">
      <div className="relative flex items-center justify-center">
        {/* Glow Effect */}
        <div className="absolute w-10 h-10 bg-orange-600  rounded-full blur-3xl opacity-40 animate-pulse"></div>

        {/* Floating Idea Circles */}
        <span className="absolute -top-8 left-0 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></span>
        <span className="absolute top-4 -right-10 w-2 h-2 bg-orange-600  rounded-full animate-ping"></span>
        <span className="absolute -left-10 bottom-6 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>

        {/* Bulb */}
        <div className="relative animate-bounce">
          {/* Bulb Head */}
          <div className="w-20 h-20  bg-orange-300 rounded-full border-4 border-orange-400  shadow-[0_0_60px_rgba(255,255,0,0.7)] flex items-center justify-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full opacity-70"></div>
          </div>

          {/* Bulb Neck */}
          <div className="w-6  h-6 bg-gray-300 mx-auto rounded-b-md border-x-2 border-gray-400"></div>

          {/* Bulb Base */}
          <div className="w-4 h-6  bg-gray-500 mx-auto rounded-md flex flex-col justify-center items-center gap-1">
            <div className="w-7 h-1 bg-gray-300 rounded"></div>
            <div className="w-7 h-1 bg-gray-300 rounded"></div>
            <div className="w-7 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulbAnimation;
