import { Filterbar } from "../../Component/Filterbar/Filerbar";
import { PlusIcon } from "@radix-ui/react-icons";
import "./Home.css";
import { recipes } from "../../db";
import { RecipeCard } from "../../Component/RecipeCard/RecipeCard";
import AddRecipeModal from "../../Component/AddRecipeModal/AddRecipeModal";
import { useData } from "../../Context/dataContext";

export const Home = () => {
  const {data,deleteRecipe} = useData();
  return (
    <div className="home">
      <div className="home-filterbar">
        <Filterbar />
      </div>
      <h1>All recipes</h1>
      <div className="home-recipe-container">
        {data?.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
      <AddRecipeModal>
        <div className="home-add">
          <PlusIcon />
        </div>
      </AddRecipeModal>
    </div>
  );
};
