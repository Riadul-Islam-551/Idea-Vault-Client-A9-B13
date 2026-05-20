import MyIdeaCard from "@/component/MyIdeaCard";
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const myId = session?.user?.id;
  console.log(myId);

  const res = await fetch(`http://localhost:5000/ideas/${myId}`);
  const myIdea = await res.json();

  console.log(myIdea);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-12">
        My Idea
      </h1>
      {myIdea.length > 0 ? (
        <>
          <div className="space-y-4 min-h-[70vh]">
            {myIdea.map((idea) => (
              <MyIdeaCard key={idea._id} idea={idea}></MyIdeaCard>
            ))}
          </div>
        </>
      ) : (
        <>
          <Card className="min-h-100  w-full flex items-center justify-center bg-base-200 ">
            <h1>You do not generate any idea yet.</h1>
            <Link href={"/add-ideas"}>
              <Button
                variant="outline"
                className={"text-orange-500 border-orange-500"}
              >
                Discover Idea
              </Button>
            </Link>
          </Card>
        </>
      )}
    </div>
  );
};

export default MyIdeasPage;
