import React from "react";

const Methodology = () => {
  return (
    <div className="container mx-auto px-7 my-16">
      {/* Section header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
          ✦ What we offer
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Services</h1>
        <p className="text-gray-500 dark:text-[#b5b5b5] text-center mt-3 mb-8 max-w-xl mx-auto leading-relaxed">
          By the end of the services, you don't just have an idea —{" "}
          <br className="hidden md:block" />
          you have a validated concept shaped by real feedback from a creative
          community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-8">
        {/* Service 1 — Discover Ideas */}
        <div className="hover-3d">
          <div className="card relative overflow-hidden rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(99,102,241,0.2)]">
            <div className="card-body">
              {/* Decorative circle */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-indigo-400 opacity-10 pointer-events-none" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4 text-white text-xl">
                💡
              </div>

              <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full mb-3">
                Step 01
              </span>

              <h2 className="card-title text-indigo-900 dark:text-indigo-100">
                Discover Ideas
              </h2>
              <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed mt-1">
                Browse through a wide range of startup ideas shared by users
                around the world. Explore trending concepts, filter by
                categories, and find inspiration for your next big innovation.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 text-sm mb-2">
                  What you can do:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Explore trending ideas",
                    "Search by categories",
                    "Save ideas you like for later",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-indigo-700 dark:text-indigo-300"
                    >
                      <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Service 2 — Share Your Idea */}
        <div className="hover-3d">
          <div className="card relative overflow-hidden rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(16,185,129,0.2)]">
            <div className="card-body">
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-emerald-400 opacity-10 pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center mb-4 text-white text-xl">
                ✏️
              </div>

              <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full mb-3">
                Step 02 
              </span>

              <h2 className="card-title text-emerald-900 dark:text-emerald-100">
                Share Your Idea
              </h2>
              <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed mt-1">
                Have an idea in mind? Post it on IdeaVault and let the community
                see it. Describe your concept clearly and attract feedback from
                like-minded innovators.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 text-sm mb-2">
                  What you can do:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Publish your startup idea",
                    "Add descriptions, tags, and categories",
                    "Reach a global audience of creators",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-300"
                    >
                      <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Service 3 — Engage & Validate */}
        <div className="hover-3d">
          <div className="card relative overflow-hidden rounded-2xl border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(249,115,22,0.2)]">
            <div className="card-body">
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-orange-400 opacity-10 pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center mb-4 text-white text-xl">
                💬
              </div>

              <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full mb-3">
                Step 03
              </span>

              <h2 className="card-title text-orange-900 dark:text-orange-100">
                Engage & Validate
              </h2>
              <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed mt-1 text-justify">
                Get real feedback from the community through comments,
                discussions, and suggestions. Improve your idea based on
                insights and validate its potential before building it.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 text-sm mb-2">
                  What you can do:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Receive comments and suggestions",
                    "Join discussions on ideas",
                    "Refine and improve your concept",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-orange-700 dark:text-orange-300"
                    >
                      <span className="w-4 h-4 rounded-full bg-orange-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
