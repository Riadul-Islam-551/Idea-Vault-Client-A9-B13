"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  //   console.log(user);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updateUser = Object.fromEntries(formData.entries());
    // console.log(updateUser);

    const { data, error } = await authClient.updateUser({
      image: updateUser.image,
      name: updateUser.name,
    });

    if (error) {
      toast.error("something went wrong");
    }
    if (data) {
      toast.success("success");
      window.location.reload();
    }
  };

  return (
    <div className="container mx-auto min-h-[70vh] ">
      <h1 className="mt-12  text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Profile
      </h1>
      <div className="w-25 h-25 rounded-full mx-auto ">
        <Image
          src={user?.image}
          alt="user?.name"
          width={600}
          height={600}
          classname={"w-full h-full "}
        ></Image>
      </div>

      <div className="max-w-100 mx-auto mt-12">
        <Form className="flex flex-col gap-4" onSubmit={handleUpdateSubmit}>
          {/* name */}
          <TextField
            defaultValue={user?.name}
            isRequired
            name="name"
            type="text"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" className={"w-full "} />
            <FieldError />
          </TextField>
          {/* image url  */}
          <TextField
            defaultValue={user?.image}
            isRequired
            name="image"
            type="text"
          >
            <Label>Image URL</Label>
            <Input placeholder="Image url" className={"w-full "} />
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit" className={"w-full bg-orange-500 rounded "}>
              <Check />
              Update Account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfile;
