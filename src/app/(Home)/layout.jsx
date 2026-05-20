import Hero from "@/component/Hero";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Hero></Hero>
      {children}
    </div>
  );
};

export default layout;
