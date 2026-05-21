"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";

export function CommentModal({ ideaDetails }) {
  const ideaId = ideaDetails._id;
  const ideaTitle = ideaDetails.title;
  const ideaImage = ideaDetails.imageUrl;
  //   console.log(ideaId);

  const { data: session } = authClient.useSession();

  // console.log(session);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const commentInput = Object.fromEntries(formData.entries());
    // const comment = commentInput.comment;

    const commentData = {
      ideaImage,
      ideaTitle,
      idea: ideaId,
      userId: session?.user?.id,
      userName: session?.user?.name,
      comment: commentInput.comment,
      time: new Date(),
      image: session?.user?.image,
    };
    // console.log("comment", commentData);

    const res = await fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Thanks for your feedback !");
      window.location.reload();
    }
    // console.log(data);
  };

  return (
    <Modal>
      <Button className={"bg-orange-500 rounded"}>Comment</Button>
      <Modal.Backdrop variant="blur">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Give your feedback !</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={handleCommentSubmit}
                  className="flex flex-col gap-4"
                >
                  <TextField
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
}
