import { ArrowUpRight } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdeaCard = ({ idea, index = 0 }) => {
  const {
    _id,
    title,
    tag,
    solution,
    shortDescription,
    problem,
    price,
    imageUrl,
    detailedDescription,
    createdBy,
    category,
    audience,
  } = idea;

  const animationDelay = ["[animation-delay:80ms]", "[animation-delay:200ms]", "[animation-delay:320ms]"];

  return (
    <div
      className={`animate-[fadeUp_0.5s_ease_both] ${animationDelay[index % 3]}`}
      style={{ animationFillMode: "both" }}
    >
      <div className="hover:-translate-y-2 duration-300 transition-all h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1c1c1c] shadow-sm hover:shadow-[0_16px_40px_rgba(249,115,22,0.15)] flex flex-col overflow-hidden">

        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden bg-orange-50 dark:bg-orange-950">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
          {/* Rank badge */}
          <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-extrabold flex items-center justify-center shadow-md">
            #{index + 1}
          </span>
          {/* Hot badge for rank #1 only */}
          {index === 0 && (
            <span className="absolute top-3 right-3 bg-white/95 dark:bg-black/80 text-red-600 dark:text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-100 dark:border-red-900">
              🔥 Hot
            </span>
          )}
        </div>

        {/* Card body */}
        <div className="px-5 py-4 flex flex-col flex-1 gap-2">

          {/* Category */}
          <span className="text-orange-500 text-[11px] font-bold uppercase tracking-widest">
            {category}
          </span>

          {/* Title */}
          <h2 className="font-extrabold text-lg leading-snug text-gray-900 dark:text-gray-100">
            {title}
          </h2>

          <hr className="border-gray-100 dark:border-gray-800" />

          {/* Audience */}
          <h5 className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="font-bold text-gray-700 dark:text-gray-300">Targeted Audience:</span>
            {audience}
          </h5>

          {/* Description */}
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
            {shortDescription}
          </p>

          {/* Budget */}
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-right">
            Estimated Budget: <span className="text-orange-500">${price}</span>
          </p>

          {/* CTA */}
          <div className="card-actions justify-end mt-1">
            <Link href={`/ideas/${_id}`}>
              <Button variant="secondary" className="text-orange-500">
                View Details
                <ArrowUpRight />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IdeaCard;