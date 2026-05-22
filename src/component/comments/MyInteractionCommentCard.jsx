import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const MyInteractionCommentCard = ({ commentData }) => {
  return (
    <div>
      <Card
        key={commentData._id}
        className="w-full items-stretch md:flex-row bg-gray-100 dark:bg-[#212121] rounded-2xl"
      >
        <div className="relative h-35 shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:30  ">
          <Image
            src={commentData.ideaImage}
            alt={commentData.title}
            width={200}
            height={200}
            className="w-25 h-25 rounded-2xl "
          ></Image>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8 text-lg ">
              Title: {commentData.ideaTitle}
            </Card.Title>
            <Card.Description>
              <span className="font-semibold">Feedback:</span>{" "}
              {commentData.comment}{" "}
            </Card.Description>
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-muted">{commentData.time}</span>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default MyInteractionCommentCard;
