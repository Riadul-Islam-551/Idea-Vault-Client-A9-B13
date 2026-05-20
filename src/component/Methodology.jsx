import React from "react";

const Methodology = () => {
  return (
    <div className="container mx-auto px-7 my-16 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Services
      </h1>
      <p className="text-gray-600 text-center my-3 mb-8 ">By the end of the services, you don’t just have an idea <br /> you have a validated concept shaped by real feedback from a creative community.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-12 ">
        {/* service 1  */}
        <div className="hover-3d ">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Discover Ideas</h2>
              <p className="text-gray-600  ">
                Browse through a wide range of startup ideas shared by users
                around the world. Explore trending concepts, filter by
                categories, and find inspiration for your next big innovation.
              </p>
              <div className="mt-4 ">
                <h3 className="font-semibold ">What you can do:</h3>
                <ul className="list-disc ml-4 ">
                  <li>Explore trending ideas</li>
                  <li>Search by categories</li>
                  <li>Save ideas you like for later</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* service 2  */}
        <div className="hover-3d ">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Share Your Idea</h2>
              <p className="text-gray-600  ">
                Have an idea in mind? Post it on IdeaVault and let the community
                see it. Describe your concept clearly and attract feedback from
                like-minded innovators.
              </p>
              <div className="mt-4 ">
                <h3 className="font-semibold ">What you can do:</h3>
                <ul className="list-disc ml-4 ">
                  <li>Publish your startup idea</li>
                  <li>Add descriptions, tags, and categories</li>
                  <li>Reach a global audience of creators</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* service 3  */}
        <div className="hover-3d ">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Engage & Validate</h2>
              <p className="text-gray-600 text-justify ">
                Get real feedback from the community through comments,
                discussions, and suggestions. Improve your idea based on
                insights and validate its potential before building it.
              </p>
              <div className="mt-4 ">
                <h3 className="font-semibold ">What you can do:</h3>
                <ul className="list-disc ml-4 ">
                  <li>Receive comments and suggestions</li>
                  <li>Join discussions on ideas</li>
                  <li>Refine and improve your concept</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
