import CommentSection from "@/component/comments/CommentSection";
import { auth } from "@/lib/auth";
import { ArrowLeft } from "@gravity-ui/icons";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailedIdea = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/details/${id}`,
    { headers: { authorization: `Bearer ${token}` } },
  );
  const ideaDetails = await res.json();

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
  } = ideaDetails;

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* ── Animated background layer ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Soft color blobs */}
        <div className="absolute -top-32 -left-32 w-105 h-105 rounded-full bg-orange-100 dark:bg-orange-950 opacity-70 animate-[floatA_8s_ease-in-out_infinite]" />
        <div className="absolute top-[10%] -right-20 w-75 h-75 rounded-full bg-violet-100 dark:bg-violet-950 opacity-60 animate-[floatB_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[5%] w-50 h-50 rounded-full bg-emerald-100 dark:bg-emerald-950 opacity-50 animate-[floatC_7s_ease-in-out_infinite]" />
        <div className="absolute -bottom-16 right-[10%] w-65 h-65 rounded-full bg-pink-100 dark:bg-pink-950 opacity-50 animate-[floatA_9s_ease-in-out_infinite_1s]" />
        {/* Decorative rings */}
        <div className="absolute -top-48 -left-48 w-125 h-125 rounded-full border border-orange-200/40 dark:border-orange-800/20 animate-[rotateSlow_30s_linear_infinite]" />
        <div className="absolute top-[30%] -right-24 w-80 h-80 rounded-full border border-violet-200/30 dark:border-violet-800/20 animate-[rotateSlow_20s_linear_infinite_reverse]" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #f4511e 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Page content ── */}
      <div className="container mx-auto py-9 px-4">
        {/* Back nav */}
        <div className="mb-7 animate-[fadeUp_0.4s_ease_both]">
          <Link
            href="/ideas"
            className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors duration-200"
          >
            <ArrowLeft />
            Back to Ideas
          </Link>
        </div>

        {/* ── Hero section: image + info ── */}
        <div
          className="flex flex-col lg:flex-row items-start gap-8 animate-[fadeUp_0.5s_ease_both]"
          style={{ animationFillMode: "both" }}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <Image
              src={imageUrl}
              alt={title}
              width={1080}
              height={1080}
              className="w-full h-64 md:h-80 lg:h-105 object-cover"
            />
            {/* Category overlay badge */}
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-white/90 dark:bg-black/70 text-orange-600 dark:text-orange-400 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-orange-200 dark:border-orange-800 backdrop-blur-sm">
              {category}
            </span>
          </div>

          {/* Info panel */}
          <div
            className="w-full lg:w-1/2 flex flex-col gap-4 py-1 animate-[fadeUp_0.55s_ease_both]"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            {/* Category pill */}
            <span className="inline-flex items-center gap-1.5 bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-orange-200 dark:border-orange-800 w-fit">
              ✦ {category}
            </span>

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug tracking-tight">
              {title}
            </h1>

            {/* Short description */}
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {shortDescription}
            </p>

            {/* Meta cards row */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-700 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                  Targeted Audience
                </p>
                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                  {audience}
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-xl p-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400 dark:text-orange-500 mb-1">
                  Est. Investment
                </p>
                <p className="text-2xl font-extrabold text-orange-500 dark:text-orange-400">
                  ${price}
                </p>
              </div>
            </div>

            {/* Tags */}
            {tag && (
              <div className="flex flex-wrap gap-2 mt-1">
                {(Array.isArray(tag) ? tag : [tag]).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Details overview ── */}
        <div
          className="mt-10 animate-[fadeUp_0.5s_ease_both]"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            <span className="w-1 h-5 rounded-full bg-orange-500 inline-block" />
            Details Overview
          </h2>
          <div className="bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-gray-700 rounded-2xl p-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {detailedDescription}
          </div>
        </div>

        {/* ── Problem + Solution cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          {/* Problem */}
          <div
            className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-2xl p-5 animate-[fadeUp_0.5s_ease_both]"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <h3 className="flex items-center gap-2 font-extrabold text-orange-800 dark:text-orange-200 text-sm mb-3">
              <span className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center text-base shrink-0">
                ⚠
              </span>
              Problem Statement
            </h3>
            <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed">
              {problem}
            </p>
          </div>

          {/* Solution */}
          <div
            className="bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 rounded-2xl p-5 animate-[fadeUp_0.5s_ease_both]"
            style={{ animationDelay: "0.38s", animationFillMode: "both" }}
          >
            <h3 className="flex items-center gap-2 font-extrabold text-violet-800 dark:text-violet-200 text-sm mb-3">
              <span className="w-7 h-7 rounded-lg bg-violet-500 text-white flex items-center justify-center text-base shrink-0">
                💡
              </span>
              Solution
            </h3>
            <p className="text-sm text-violet-700 dark:text-violet-300 leading-relaxed">
              {solution}
            </p>
          </div>
        </div>

        {/* ── Comments ── */}
        <div
          className="mt-10 animate-[fadeUp_0.5s_ease_both]"
          style={{ animationDelay: "0.45s", animationFillMode: "both" }}
        >
          <CommentSection ideaDetails={ideaDetails} />
        </div>
      </div>
    </div>
  );
};

export default DetailedIdea;
