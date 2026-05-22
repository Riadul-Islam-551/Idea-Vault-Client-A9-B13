import Hero from "@/component/Hero";
import Methodology from "@/component/Methodology";
import TopContributors from "@/component/TopContributors";
import TrendingIdea from "@/component/TrendingIdea";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Hero></Hero>
      <Methodology></Methodology>
      <TrendingIdea></TrendingIdea>
      <TopContributors></TopContributors>
      {children}
    </div>
  );
};

export default layout;
