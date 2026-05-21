"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Label, ListBox, Select } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ViewProfile() {
  const [showProfile, setShowProfile] = useState(false);
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  return (
    <div className="relative">
      <div onClick={() => setShowProfile(!showProfile)}>
        <Avatar className="cursor-pointer">
          <Avatar.Image alt="User" src={user?.image} />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
      </div>

      {showProfile && (
        <div className="absolute -right-20 top-14 z-50">
          <div className="w-65 h-65 rounded-2xl bg-white flex flex-col justify-center items-center gap-3 p-2">
            <div className="w-20 h-20 ">
              <Image
                src={user?.image}
                alt={user?.name}
                width={200}
                height={200}
                className="rounded-full w-full h-full "
              ></Image>
            </div>
            <div className="mt-3 text-center">
              <h1 className="text-lg font-bold">{user?.name}</h1>
              <p className="text-gray-600">{user?.email}</p>
            </div>
            <div>
              <Link href={"/updateProfile"}>
                <Button variant="outline" className={"border-orange-500 rounded"}>
                  Update Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
