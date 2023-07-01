import { Filterbar } from "../../Component/Filterbar/Filerbar";
import { PlusIcon } from "@radix-ui/react-icons";
import "./Home.css";
import { recipes } from "../../db";
import { RecipeCard } from "../../Component/RecipeCard/RecipeCard";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-filterbar">
        <Filterbar />
      </div>
      <h1>All recipes</h1>
      <div className="home-recipe-container">
        {recipes?.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
      <div className="home-add">
        <PlusIcon />
      </div>
    </div>
  );
};
