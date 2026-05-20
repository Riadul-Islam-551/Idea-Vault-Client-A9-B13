"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

export function DeleteIdea({ idea }) {
  const { _id } = idea;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/ideas/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.deletedCount > 0) {
      window.location.reload();
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="w-full sm:w-auto rounded border-red-500 text-red-500"
      >
        <TrashBin></TrashBin>Delete
      </Button>
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Idea permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
