import "./EditModal.css";
import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useData } from "../../Context/dataContext";

const EditModal = ({ children, recipe }) => {
  const [open, setOpen] = useState(false);
  const { EditRecipe } = useData();
  const formRef = useRef();

  const editRecipeHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(formRef.current);
    const obj = {};
    for (const [key, value] of formdata.entries()) {
      if (key === "ingredients" || key === "instructions") {
        obj[key] = value.split(",");
      }else {
        obj[key] = value;
      }
    }
    console.log(obj)
    EditRecipe(recipe?.id, { id: recipe?.id, ...obj });
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="DialogTrigger">{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit recipe</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your recipe here. Click save when you're done.
          </Dialog.Description>
          <form ref={formRef} onSubmit={editRecipeHandler}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name*
              </label>
              <input
                className="Input"
                name="name"
                required
                defaultValue={recipe?.name}
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
                defaultValue={recipe?.type}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Image
              </label>
              <input
                className="Input"
                name="image"
                defaultValue={recipe?.image}
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
                defaultValue={recipe?.ingredients}
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
                defaultValue={recipe?.instructions}
              />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button className="Button green">Save changes</button>
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

export default EditModal;
