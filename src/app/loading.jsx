import React from "react";

const LoadingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Bulb */}
        <div className="relative w-16 h-20 animate-bounce">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-300/40 rounded-full blur-xl animate-pulse" />

          {/* Bulb body */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-10 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(250,204,21,0.7)]" />

          {/* Base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-4 bg-gray-700 rounded-sm" />
        </div>

        {/* Text */}
        <p className="mt-4 text-gray-500 animate-pulse">Lighting up ideas...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
