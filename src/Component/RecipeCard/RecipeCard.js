import { Cross1Icon, CrossCircledIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipecard">
      <div className="recipecard-header">
        <div className="recipecard-img-container">
          <img />
        <div className="recipecard-icon-container">
            <Pencil1Icon/>
            <CrossCircledIcon/>
        </div>
        </div>
      </div>
      <div className="recipecard-info">
        <h4>{recipe?.name}</h4>
        <div>
          <span>Cuisine Type</span>
          <span>{recipe?.type}</span>
        </div>
        <div>
          <span>Ingredients</span>
          <Link>{"view >"}</Link>
        </div>
        <div>
          <span>Instruction</span>
          <Link>{"view >"}</Link>
        </div>
      </div>
    </div>
  );
};
