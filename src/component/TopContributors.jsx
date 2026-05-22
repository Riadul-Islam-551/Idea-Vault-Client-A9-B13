import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const TopContributors = () => {
  return (
    <div className="container mx-auto px-3 py-12 md:py-16 lg:py-24">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Top Contributors
        </h1>
        <p className="text-gray-600 dark:text-[#b5b5b5] mt-3">
          See Our Active Community Member
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9 ">
          <Card className="bg-gray-100 dark:bg-[#7a7a7a] flex justify-center items-center">
            <div className="w-25 h-25 ">
              <Image
                src={"/contributors/imran.png"}
                alt=""
                width={200}
                height={200}
                className="w-full h-full rounded-full"
              ></Image>
            </div>
            <div className="text-gray-600 dark:text-[#b5b5b5] text-center ">
              <p>Name: Imran Khan</p>
              <p className="text-sm">Profession: Businessman</p>
            </div>
          </Card>
          <Card className="bg-gray-100 dark:bg-[#7a7a7a] flex justify-center items-center">
            <div className="w-25 h-25 ">
              <Image
                src={"/contributors/jemy.jpg"}
                alt=""
                width={200}
                height={200}
                className="w-full h-full rounded-full"
              ></Image>
            </div>
            <div className="text-gray-600 dark:text-[#b5b5b5] text-center ">
              <p>Name: Jemy</p>
              <p className="text-sm">Profession: Photographer</p>
            </div>
          </Card>
          <Card className="bg-gray-100 dark:bg-[#7a7a7a] flex justify-center items-center">
            <div className="w-25 h-25 ">
              <Image
                src={"/contributors/kafi.jpg"}
                alt=""
                width={200}
                height={200}
                className="w-full h-full rounded-full"
              ></Image>
            </div>
            <div className="text-gray-600 dark:text-[#b5b5b5] text-center ">
              <p>Name: Kafi Islam</p>
              <p className="text-sm">Profession: Doctor</p>
            </div>
          </Card>
          <Card className="bg-gray-100 dark:bg-[#7a7a7a] flex justify-center items-center">
            <div className="w-25 h-25 ">
              <Image
                src={"/contributors/riad.avif"}
                alt=""
                width={200}
                height={200}
                className="w-full h-full rounded-full"
              ></Image>
            </div>
            <div className="text-gray-600 dark:text-[#b5b5b5] text-center ">
              <p>Name: Riadul Islam </p>
              <p className="text-sm">Profession: Student</p>
            </div>
          </Card>
          <Card className="bg-gray-100 dark:bg-[#7a7a7a] flex justify-center items-center">
            <div className="w-25 h-25 ">
              <Image
                src={"/contributors/saiful.jpg"}
                alt=""
                width={200}
                height={200}
                className="w-full h-full rounded-full"
              ></Image>
            </div>
            <div className="text-gray-600 dark:text-[#b5b5b5] text-center ">
              <p>Name: Saiful </p>
              <p className="text-sm">Profession: Engineer</p>
            </div>
          </Card>
          <Card className="bg-gray-100 dark:bg-[#7a7a7a] flex justify-center items-center">
            <div className="w-25 h-25 ">
              <Image
                src={"/contributors/elias.jpg"}
                alt=""
                width={200}
                height={200}
                className="w-full h-full rounded-full"
              ></Image>
            </div>
            <div className="text-gray-600 dark:text-[#b5b5b5] text-center ">
              <p>Name: Elias </p>
              <p className="text-sm">Profession: Teacher </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TopContributors;
