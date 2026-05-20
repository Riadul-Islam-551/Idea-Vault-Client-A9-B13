import { Pencil, TrashBin } from "@gravity-ui/icons";
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { DeleteIdea } from "./DeleteIdea";

const MyIdeaCard = ({ idea }) => {
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
      <Card className="w-full items-stretch md:flex-row bg-base-300">
        <div className="relative h-35 shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:30  ">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="w-25 h-25 rounded-2xl "
          ></Image>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8 text-xl ">{title}</Card.Title>
            <Card.Description>{shortDescription}</Card.Description>
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                Targeted audience : {audience}
              </span>
              <span className="text-xs text-muted">Category : {category}</span>
            </div>
            <div className="flex items-center justify-end space-x-2 ">
              <Button className="w-full sm:w-auto bg-orange-500 rounded ">
                <Pencil></Pencil> Edit
              </Button>
              <DeleteIdea idea={idea}></DeleteIdea>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default MyIdeaCard;
