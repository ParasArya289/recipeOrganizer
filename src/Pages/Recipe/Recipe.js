import { useParams } from "react-router-dom";
import { useData } from "../../Context/dataContext";
import "./Recipe.css";

export const Recipe = () => {
  const { id: recipeId } = useParams();
  const { data } = useData();
  const foundRecipe = data?.find(({ id }) => id === +recipeId);
  return (
    <div className="flex-container">
      <div className="recipe-container">
        <div className="recipe-img">
          <img src={foundRecipe?.image} />
        </div>
        <div classname="recipe-info">
          <h4 style={{color:"tomato"}} >{foundRecipe?.name}</h4>
          <p>Cuisine: {foundRecipe?.type}</p>
          <p>Ingredients: {foundRecipe?.ingredients}</p>
          <p>Instructions</p>
          <ol>
            {foundRecipe?.ingredients?.map((ing) => (
              <li>{ing}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
