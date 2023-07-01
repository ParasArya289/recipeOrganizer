import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useData } from "../../Context/dataContext";

const AddRecipeModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { addRecipe } = useData();
  const formRef = useRef();

  const addRecipeHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      if (key === "ingredients" || key === "instructions") {
        obj[key] = value.split(",");
      } else {
        obj[key] = value;
      }
    }
    addRecipe(obj);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add recipe</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Create your recipe here. Click save when you're done.
          </Dialog.Description>
          <form ref={formRef} onSubmit={addRecipeHandler}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name*
              </label>
              <input
                className="Input"
                name="name"
                required
                placeholder="Name of recipe"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Cuisine*
              </label>
              <input
                className="Input"
                name="type"
                required
                placeholder="Type of cuisine e.g, American"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Image
              </label>
              <input
                className="Input"
                name="image"
                placeholder="URL of image"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Ingredients*
              </label>
              <input
                className="Input"
                name="ingredients"
                required
                placeholder="Ingredients ',' separated"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Instructions*
              </label>
              <input
                className="Input"
                name="instructions"
                required
                placeholder="Instructions ',' separated"
              />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button type="submit" className="Button green">
                Save changes
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddRecipeModal;
