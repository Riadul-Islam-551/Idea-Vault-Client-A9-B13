"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const AddIdeaPage = () => {
  const { data: session } = authClient.useSession();
  // console.log(session?.user?.id);
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ideaData = Object.fromEntries(formData.entries());

    // console.log(ideaData);

    const idea = {
      title: ideaData.title,
      tag: ideaData.tag,
      solution: ideaData.solution,
      shortDescription: ideaData.shortDescription,
      problem: ideaData.problem,
      imageUrl: ideaData.imageUrl,
      detailedDescription: ideaData.detailedDescription,
      category: ideaData.category,
      audience: ideaData.audience,
      price: ideaData.price,
      createdBy: session?.user?.id,
    };

    // console.log(idea);

    //token for client component
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);


    const res = await fetch("http://localhost:5000/ideas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(idea),
    });

    const data = await res.json();
    toast.success("Discover your idea successfully !");

    redirect("/myIdeas");
    // console.log(data);
  };

  return (
    <div className="px-4 ">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl mt-9 text-center">
        Discover Your Idea
      </h1>
      <Form
        className="flex container mx-auto p-7 flex-col gap-4 border border-gray-200 rounded-2xl my-12 shadow"
        onSubmit={onSubmit}
      >
        <div>
          {/* idea name  */}
          <TextField isRequired name="title" type="Text">
            <Label>Title</Label>
            <Input
              placeholder="AI-Powered Study Assistant"
              className="w-full  border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-6  lg:gap-9 ">
          {/* tag  */}
          <TextField
            isRequired
            name="tag"
            type="Text"
            className="w-full md:w-1/2 "
          >
            <Label>Tag </Label>
            <Input
              placeholder="tag"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
          {/* category */}
          <fieldset className="fieldset w-full lg:w-1/2">
            <legend className="font-bold text-gray-500">Category</legend>
            <select
              name="category"
              isRequired
              className="select w-full h-9 flex justify-start items-center bg-base-300 border-none rounded-xl"
            >
              <option className="text-gray-600 " disabled={true}>
                Select Category
              </option>
              <option>Health</option>
              <option>Education</option>
              <option>AI</option>
              <option>Tech</option>
            </select>
          </fieldset>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-9 ">
          {/* price  */}
          <TextField isRequired name="price" type="Text" className="w-full">
            <Label>Estimate Budget </Label>
            <Input
              placeholder="e.g., $1200"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
          {/* targeted audience */}
          <TextField isRequired name="audience" type="Text" className="w-full">
            <Label>Targeted Audience</Label>
            <Input
              placeholder="Teenagers"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div>
          {/*image url */}
          <TextField isRequired name="imageUrl" type="url">
            <Label>Image Url</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div>
          {/* short description */}
          <TextField isRequired name="shortDescription" type="text">
            <Label>Short Description</Label>
            <Input
              placeholder=""
              className="w-full border-none shadow-none bg-base-300"
            />
            <FieldError />
          </TextField>
        </div>
        <div>
          {/* Description*/}
          <TextField isRequired className="w-full" name="detailedDescription">
            <Label>Detailed Description</Label>
            <TextArea
              placeholder=""
              rows={4}
              className="border-none shadow-none bg-base-300"
            />
            <Description>Maximum 1000 characters</Description>
          </TextField>
        </div>
        <div>
          {/* problem*/}
          <TextField isRequired className="w-full" name="problem">
            <Label>Problem Statement</Label>
            <TextArea
              placeholder=""
              rows={4}
              className="border-none shadow-none bg-base-300"
            />
            <Description>Maximum 1000 characters</Description>
          </TextField>
        </div>
        <div>
          {/* solution*/}
          <TextField isRequired className="w-full" name="solution">
            <Label>Proposed Solution</Label>
            <TextArea
              placeholder=""
              rows={4}
              className="border-none shadow-none bg-base-300"
            />
            <Description>Maximum 1000 characters</Description>
          </TextField>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="submit" className={"bg-orange-500 rounded "}>
            <Check />
            Add Idea
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddIdeaPage;
