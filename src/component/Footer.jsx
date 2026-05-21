import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 ">
      <div className="container mx-auto pt-12 pb-2 ">
        <footer className="footer  border-gray-700  border-b px-10 py-4">
          <aside className="grid-flow-row  items-center">
            <Link href="/">
              <h1 className="text-xl font-bold text-orange-500">IdeaVault</h1>
            </Link>
            <p>
              Turn raw inspiration into validated innovation through
              collaboration, feedback, and community-driven discussion.
            </p>
          </aside>
        </footer>
        <footer className="footer grid-cols-1 lg:grid-cols-3 sm:footer-horizonta p-10">
          <nav className="col-span-1">
            <h6 className="font-bold text-lg">Quick Links</h6>
            <Link href="/">Home</Link>
            <Link href="/ideas">Ideas</Link>
            <Link href="/add-ideas">Add Idea</Link>
            <Link href="/myIdeas">My Ideas</Link>
            <Link href="/myInteractions">My Interactions</Link>
          </nav>
          <nav className="col-span-1">
            <h6 className="font-bold text-lg">Support</h6>
            <a href="#" className="text-xs">
              Help Center
            </a>
            <a href="#" className="text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-xs">
              Privacy Policy
            </a>
          </nav>
          <nav className="col-span-1">
            <h6 className="font-bold text-lg">Contact Us</h6>
            <a href="#" className="text-xs">
              786 901 1622
            </a>
            <a href="#" className="text-xs">
              info@wandarland.com
            </a>
          </nav>
        </footer>
        <p className="text-center text-[10px] ">
          &copy; 2026 Wanderlust. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
