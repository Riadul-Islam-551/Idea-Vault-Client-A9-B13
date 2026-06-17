import React from "react";

const Methodology = () => {
  const services = [
    {
      step: "Step 01",
      icon: "💡",
      title: "Discover Ideas",
      description:
        "Browse through a wide range of startup ideas shared by users around the world. Explore trending concepts, filter by categories, and find inspiration for your next big innovation.",
      features: [
        "Explore trending ideas",
        "Search by categories",
        "Save ideas you like for later",
      ],
    },
    {
      step: "Step 02",
      icon: "✏️",
      title: "Share Your Idea",
      description:
        "Have an idea in mind? Post it on IdeaVault and let the community see it. Describe your concept clearly and attract feedback from like-minded innovators.",
      features: [
        "Publish your startup idea",
        "Add descriptions, tags, and categories",
        "Reach a global audience of creators",
      ],
    },
    {
      step: "Step 03",
      icon: "💬",
      title: "Engage & Validate",
      description:
        "Get real feedback from the community through comments, discussions, and suggestions. Improve your idea based on insights and validate its potential before building it.",
      features: [
        "Receive comments and suggestions",
        "Join discussions on ideas",
        "Refine and improve your concept",
      ],
    },
  ];

  const delays = [
    "animation-delay-[50ms]",
    "animation-delay-[180ms]",
    "animation-delay-[310ms]",
  ];

  return (
    <div className="container mx-auto px-7 my-16">
      {/* Section header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-orange-200 dark:border-orange-800">
          ✦ What we offer
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
          Services
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-center mt-3 mb-10 max-w-xl mx-auto leading-relaxed">
          By the end of the services, you don&apos;t just have an idea —{" "}
          <br className="hidden md:block" />
          you have a validated concept shaped by real feedback from a creative
          community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
        {services.map((service, index) => (
          <div
            key={service.step}
            className={`animate-[fadeUp_0.55s_ease_both] ${delays[index]}`}
            style={{ animationFillMode: "both" }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1c1c1c] h-full flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_44px_rgba(249,115,22,0.14)] group">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-orange-500" />

              {/* Decorative circles */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full border border-gray-100 dark:border-gray-800 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-16 h-16 rounded-full border border-gray-50 dark:border-gray-800/50 pointer-events-none" />

              {/* Step + Icon row */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-full border border-orange-200 dark:border-orange-800">
                  {service.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 flex items-center justify-center text-xl shrink-0">
                  {service.icon}
                </div>
              </div>

              {/* Title & description */}
              <div>
                <h2 className="font-extrabold text-lg leading-snug text-gray-900 dark:text-gray-100">
                  {service.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mt-2">
                  {service.description}
                </p>
              </div>

              <hr className="border-gray-100 dark:border-gray-800" />

              {/* Features */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                  What you can do
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-4.5 h-4.5 rounded-full bg-orange-500 text-white flex items-center justify-center text-[9px] font-extrabold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
