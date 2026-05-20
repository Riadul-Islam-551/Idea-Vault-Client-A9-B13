import Hero from "@/component/Hero";
import Methodology from "@/component/Methodology";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Hero></Hero>
      <Methodology></Methodology>
      {children}
    </div>
  );
};

export default layout;
