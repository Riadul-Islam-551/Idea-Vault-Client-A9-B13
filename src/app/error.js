"use client"
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl border border-orange-100 shadow-2xl rounded-3xl p-8 md:p-14 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center shadow-lg">
            <span className="text-5xl font-extrabold text-orange-500">404</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable. Let’s get you back to discovering innovative
          startup ideas on IdeaVault.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105"
          >
            Back To Home
          </Link>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-300 animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce [animation-delay:0.15s]"></div>
          <div className="w-3 h-3 rounded-full bg-orange-500 animate-bounce [animation-delay:0.3s]"></div>
        </div>
      </div>
    </div>
  );
}
