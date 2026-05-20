import { auth } from "@/lib/auth";
import { ArrowUpRight, PinFill } from "@gravity-ui/icons";
import { Button, Calendar } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdeaCard = async ({ idea }) => {
  // const session = await auth.api.getSession({
  //   headers: await headers(), // you need to pass the headers object.
  // });
  // const creator = session?.user?.name
  // console.log(creator)

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
  return (
    <div>
      <div className="hover:scale-105 duration-250 h-full ">
        <div className="card bg-base-200 shadow-sm rounded-xl h-full flex flex-col">
          <div className="w-full  h-50  overflow-hidden rounded-xl ">
            <Image
              src={imageUrl}
              alt={title}
              width={300}
              height={300}
              className="w-full h-full object-cover  "
            ></Image>
          </div>
          <p className="text-orange-600 text-sm">{category}</p>

          <div className=" px-0 ">
            <h2 className="card-title font-bold text-lg">{title}</h2>
            <h5 className="my-2 text-xs text-gray-600 pb-3 border-b border-gray-300">
              <span className="font-semibold ">Targeted Audience: </span>
              {audience}{" "}
            </h5>
            <div className="flex flex-col justify-between items-start gap-3">
              <h1 className="font-light text-sm">{shortDescription}</h1>
              <p className="text-end ">Estimated Budget: $ {price}</p>
            </div>

            {/* book now button  */}
            <div className="card-actions justify-end mt-4 ">
              <Link href={`/ideas/${_id}`}>
                <Button variant="secondary" className="text-orange-500">
                  view Details
                  <ArrowUpRight></ArrowUpRight>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* 8 extra div need for 3D hover effect  */}
      </div>
    </div>
  );
};

export default IdeaCard;
