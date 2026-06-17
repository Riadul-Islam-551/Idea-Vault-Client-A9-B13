import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const contributors = [
  {
    src: "/contributors/imran.png",
    name: "Imran Khan",
    profession: "Businessman",
    initials: "IK",
    ideas: 14,
    colors: {
      card: "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800",
      ring: "ring-orange-500",
      rank: "bg-orange-500",
      badge:
        "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      hover: "hover:shadow-[0_14px_36px_rgba(249,115,22,0.18)]",
    },
  },
  {
    src: "/contributors/jemy.jpg",
    name: "Jemy",
    profession: "Photographer",
    initials: "JM",
    ideas: 11,
    colors: {
      card: "bg-violet-50 dark:bg-violet-950 border-violet-200 dark:border-violet-800",
      ring: "ring-violet-500",
      rank: "bg-violet-500",
      badge:
        "bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200",
      hover: "hover:shadow-[0_14px_36px_rgba(139,92,246,0.18)]",
    },
  },
  {
    src: "/contributors/kafi.jpg",
    name: "Kafi Islam",
    profession: "Doctor",
    initials: "KI",
    ideas: 9,
    colors: {
      card: "bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800",
      ring: "ring-emerald-500",
      rank: "bg-emerald-500",
      badge:
        "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200",
      hover: "hover:shadow-[0_14px_36px_rgba(16,185,129,0.18)]",
    },
  },
  {
    src: "/contributors/riad.avif",
    name: "Riadul Islam",
    profession: "Student",
    initials: "RI",
    ideas: 8,
    colors: {
      card: "bg-pink-50 dark:bg-pink-950 border-pink-200 dark:border-pink-800",
      ring: "ring-pink-500",
      rank: "bg-pink-500",
      badge: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
      hover: "hover:shadow-[0_14px_36px_rgba(236,72,153,0.18)]",
    },
  },
  {
    src: "/contributors/saiful.jpg",
    name: "Saiful",
    profession: "Engineer",
    initials: "SF",
    ideas: 7,
    colors: {
      card: "bg-sky-50 dark:bg-sky-950 border-sky-200 dark:border-sky-800",
      ring: "ring-sky-500",
      rank: "bg-sky-500",
      badge: "bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200",
      hover: "hover:shadow-[0_14px_36px_rgba(14,165,233,0.18)]",
    },
  },
  {
    src: "/contributors/elias.jpg",
    name: "Elias",
    profession: "Teacher",
    initials: "EL",
    ideas: 6,
    colors: {
      card: "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800",
      ring: "ring-yellow-500",
      rank: "bg-yellow-500",
      badge:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      hover: "hover:shadow-[0_14px_36px_rgba(234,179,8,0.18)]",
    },
  },
];

const animationDelays = [
  "[animation-delay:50ms]",
  "[animation-delay:130ms]",
  "[animation-delay:210ms]",
  "[animation-delay:290ms]",
  "[animation-delay:370ms]",
  "[animation-delay:450ms]",
];

const TopContributors = () => {
  return (
    <div className="relative overflow-hidden">
      {" "}
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-orange-400 opacity-[0.07] pointer-events-none" />
      <div className="absolute top-1/2 -right-16 w-52 h-52 rounded-full bg-violet-500 opacity-[0.07] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-44 h-44 rounded-full bg-orange-400 opacity-[0.06] pointer-events-none" />
      <div className=" container mx-auto px-3 py-12 md:py-16 lg:py-24">
        {/* Section header */}
        <div className="text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-orange-200 dark:border-orange-800">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Community
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Top Contributors
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Meet our most active and inspiring community members
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-10">
          {contributors.map((c, index) => (
            <div
              key={c.name}
              className={`animate-[fadeUp_0.5s_ease_both] ${animationDelays[index]}`}
              style={{ animationFillMode: "both" }}
            >
              <Card
                className={`relative overflow-hidden rounded-2xl border p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 ${c.colors.card} ${c.colors.hover}`}
              >
                {/* Decorative circle */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-10 bg-current pointer-events-none" />

                {/* Rank badge */}
                <span
                  className={`absolute top-2.5 right-2.5 w-6 h-6 rounded-full ${c.colors.rank} text-white text-[10px] font-extrabold flex items-center justify-center shadow-sm`}
                >
                  #{index + 1}
                </span>

                {/* Avatar with colored ring + float animation */}
                <div
                  className={`w-16 h-16 rounded-full ring-2 ring-offset-2 ${c.colors.ring} ring-offset-white dark:ring-offset-[#1c1c1c] overflow-hidden shrink-0 animate-[float_3.5s_ease-in-out_infinite]`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <Image
                    src={c.src}
                    alt={c.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <p className="font-extrabold text-sm text-gray-900 dark:text-gray-100 text-center leading-tight">
                  {c.name}
                </p>

                {/* Profession badge */}
                <span
                  className={`text-[11px] font-semibold px-3 py-1 rounded-full ${c.colors.badge}`}
                >
                  {c.profession}
                </span>

                {/* Ideas count */}
                <p className="text-[11px] text-gray-400 dark:text-gray-500">
                  {c.ideas} ideas shared
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopContributors;
