"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = ({ href, children }) => {
  const pathname = usePathname();
//   console.log(pathname);

  let textDecoration = "";
  if (pathname === href) {
    textDecoration = "border-b-2  border-orange-500";
  }

  return (
    <Link className={`px-2 ${textDecoration}`} href={href}>
      {children}
    </Link>
  );
};

export default Navlinks;
