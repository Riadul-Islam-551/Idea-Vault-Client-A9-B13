"use client";
import React from "react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const EditComment = ({ comment }) => {
  //   console.log(comment);
  const { _id, userName, userId, image, idea, comment: commentInput } = comment;

  const handleEditCommentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const commentInput = Object.fromEntries(formData.entries());
    // console.log(commentInput.comment);
    const commentData = {
      comment: commentInput.comment,
      userName,
      userId,
      time: new Date(),
      image,
      idea,
    };
    console.log("comment", commentData);
    // console.log(_id);

    //token for client component
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(commentData),
      },
    );

    const data = await res.json();
    // console.log(data);

    if (data.modifiedCount > 0) {
      toast.success("Your feedback has been updated");
      window.location.reload();
    }
  };

  return (
    <Modal>
      <Button variant="tertiary" className={"text-sm"}>
        Edit
      </Button>
      <Modal.Backdrop variant="blur">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Change your feedback !</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={handleEditCommentSubmit}
                  className="flex flex-col gap-4"
                >
                  <TextField
                    defaultValue={commentInput}
                    className="w-full"
                    name="comment"
                    type="text"
                    variant="secondary"
                  >
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="outline"
                      className={"text-orange-500 rounded border-orange-500"}
                    >
                      Send Feedback
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditComment;
