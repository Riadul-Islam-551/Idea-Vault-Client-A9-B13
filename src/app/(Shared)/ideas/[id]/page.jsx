import CommentSection from "@/component/comments/CommentSection";
import { auth } from "@/lib/auth";
import { ArrowLeft, PinFill } from "@gravity-ui/icons";
import { Button, Calendar } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailedIdea = async ({ params }) => {
  const { id } = await params;
  //   console.log("id", id);
  
  // token for server component 
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/details/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const ideaDetails = await res.json();

  //   console.log(ideaDetails);

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
    <div className="container mx-auto py-9 px-2 ">
      {/* nav button  */}
      <div className="flex justify-between items-center mb-5 ">
        <div>
          <Link href={"/ideas"} className="flex items-center gap-2">
            <ArrowLeft></ArrowLeft> Back to Ideas
          </Link>
        </div>
      </div>
      {/* details section  */}
      <div className="text-gray-600 dark:text-[#b5b5b5]">
        <div className="flex flex-col lg:flex-row  items-start justify-center gap-7">
          <div className="w-full lg:w-[50%]  h-50 md:h-75 lg:h-100   overflow-hidden rounded-xl ">
            <Image
              src={imageUrl}
              alt={title}
              width={1080}
              height={1080}
              className="w-full h-full object-cover  "
            ></Image>
          </div>
          <div className="w-full  lg:w-[50%] flex flex-col lg:flex-row justify-between items-start gap-7  py-3 ">
            <div>
              <h2 className="card-title  font-bold text-lg md:text-xl">
                {title}
              </h2>

              <h1 className="mt-2 text-sm ">{shortDescription}</h1>

              <p className="my-3 text-sm text-orange-500 bg-gray-200  inline-block py-1 px-6 rounded-full  ">
                {category}
              </p>
              <p className="my-3 ">
                <span className="font-semibold ">Targeted Audience: </span>
                {audience}.
              </p>
              <p>
                To implement this idea commercially, need around{" "}
                <span className="font-semibold text-xl ">${price}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-9 ">
          <h1 className="text-lg font-semibold text-black ">
            Details Overview
          </h1>
          <p>{detailedDescription}</p>
          <div className="details-footer flex flex-col lg:flex-row justify-center items-center gap-3 mt-4 ">
            <div className="p-2 w-full lg:w-[50%] border border-orange-300 rounded-xl">
              <h3 className=" font-semibold">Problem Statement</h3>
              <p className="text-sm">{problem}</p>
            </div>
            <div className="p-2 w-full lg:w-[50%] border border-orange-300  rounded-xl">
              <h3 className=" font-semibold">Solutions</h3>
              <p className="text-sm">{solution}</p>
            </div>
          </div>
        </div>
      </div>
      {/* comments section  */}
      <CommentSection ideaDetails={ideaDetails}></CommentSection>
    </div>
  );
};

export default DetailedIdea;
