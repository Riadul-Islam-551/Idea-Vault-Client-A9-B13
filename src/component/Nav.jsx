// import React from "react";
"use client";

import { Avatar, Button, Spinner } from "@heroui/react";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { authClient } from "@/lib/auth-client";

const Nav = () => {
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  const links = (
    <>
      <Navlinks href="/">Home</Navlinks>
      <Navlinks href="/ideas">Ideas</Navlinks>
      <Navlinks href="/add-ideas">Add Idea</Navlinks>
      <Navlinks href="/myIdeas">My Ideas</Navlinks>
      <Navlinks href="/myInteractions">My Interactions</Navlinks>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start w-[10%] md:w-[50%]">
          <div className="dropdown lg:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="hidden lg:block ">
            <ul
              tabIndex="-1"
              className="flex justify-start items-center text-sm gap-2 "
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <h1 className="text-xl font-bold text-orange-500">IdeaVault</h1>
          </Link>
        </div>

        <div className="navbar-end w-full md:w-[50%]">
          {/* <div className="space-x-2">
            <Link href={"/login"}>
              <Button
                variant="outline"
                className={"border-orange-500 text-orange-500"}
              >
                Login
              </Button>
            </Link>
            <Link href={"/registration"}>
              <Button className={"bg-orange-500 text-white"}>
                Registration
              </Button>
            </Link>
          </div> */}

          {user ? (
            <>
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              {/* <Link href="/profile" className="hidden lg:block ">
                <Button variant="ghost">
                  <Person></Person> Profile
                </Button>
              </Link> */}
              <Button
                variant="outline"
                onClick={handleLogOut}
                className={"ml-2"}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" className={"text-xs md:text-sm"}>
                  Login
                </Button>
              </Link>
              <Link href="/registration">
                <Button
                  variant="outline"
                  className={"text-xs md:text-sm ml-2 "}
                >
                  Registration
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
