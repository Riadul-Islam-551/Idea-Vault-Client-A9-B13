"use client";

import { Check, Envelope, Pencil } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  FieldError,
  TextArea,
  Description,
} from "@heroui/react";

export function EditIdea({ idea }) {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ideaData = Object.fromEntries(formData.entries());
    // console.log(ideaData);

    const res = await fetch(`http://localhost:5000/ideas/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ideaData),
    });

    const data = await res.json();
    console.log(data);
    alert("Discover your idea successfully!!");
    if (data.modifiedCount > 0) {
      window.location.reload();
    }

    // console.log(data);
  };

  return (
    <Modal>
      <Button className="w-full sm:w-auto bg-orange-500 rounded ">
        <Pencil></Pencil> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-250">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit your idea !</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form
                  className="flex container mx-auto p-7 flex-col gap-4 border border-gray-200 rounded-2xl my-12 shadow"
                  onSubmit={onSubmit}
                >
                  <div>
                    {/* idea name  */}
                    <TextField
                      defaultValue={title}
                      isRequired
                      name="title"
                      type="Text"
                    >
                      <Label>Title</Label>
                      <Input
                        placeholder="AI-Powered Study Assistant"
                        className="w-full  border-none shadow-none bg-base-300"
                      />
                      <FieldError />
                    </TextField>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-around items-center gap-9">
                    {/* tag  */}
                    <TextField
                      defaultValue={tag}
                      isRequired
                      name="tag"
                      type="Text"
                      className="w-full"
                    >
                      <Label>Tag </Label>
                      <Input
                        placeholder="tag"
                        className="w-full border-none shadow-none bg-base-300"
                      />
                      <FieldError />
                    </TextField>
                    {/* category */}
                    <Select
                      defaultValue={category}
                      name="category"
                      isRequired
                      className="w-full "
                      placeholder="Select category"
                    >
                      <Label>Category</Label>
                      <Select.Trigger className="rounded-xl  bg-base-300 ">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Tech" textValue="Tech">
                            Tech
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Education" textValue="Education">
                            Education
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="AI" textValue="AI">
                            AI
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Health" textValue="Health">
                            Health
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-around items-center gap-9">
                    {/* price  */}
                    <TextField
                      defaultValue={price}
                      isRequired
                      name="price"
                      type="Text"
                      className="w-full"
                    >
                      <Label>Estimate Budget </Label>
                      <Input
                        placeholder="e.g., $1200"
                        className="w-full border-none shadow-none bg-base-300"
                      />
                      <FieldError />
                    </TextField>
                    {/* targeted audience */}
                    <TextField
                      defaultValue={audience}
                      isRequired
                      name="audience"
                      type="Text"
                      className="w-full"
                    >
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
                    <TextField
                      defaultValue={imageUrl}
                      isRequired
                      name="imageUrl"
                      type="url"
                    >
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
                    <TextField
                      defaultValue={shortDescription}
                      isRequired
                      name="shortDescription"
                      type="text"
                    >
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
                    <TextField
                      defaultValue={detailedDescription}
                      isRequired
                      className="w-full"
                      name="detailedDescription"
                    >
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
                    <TextField
                      defaultValue={problem}
                      isRequired
                      className="w-full"
                      name="problem"
                    >
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
                    <TextField
                      defaultValue={solution}
                      isRequired
                      className="w-full"
                      name="solution"
                    >
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
                      <Pencil />
                      Edit Idea
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
