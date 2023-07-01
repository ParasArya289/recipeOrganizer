import { createContext, useContext, useEffect, useState } from "react";
import { recipes } from "../db";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const retrievedRecipes = JSON.parse(localStorage.getItem("recipe"));
    if (retrievedRecipes) {
      setData(retrievedRecipes);
      return;
    }
    setData([...recipes]);
  }, []);

  const addRecipe = (recipe) => {
    setData((prev) => {
      const arr = [...prev, recipe];
      localStorage.setItem("recipe", JSON.stringify(arr));
      return arr;
    });
  };

  const EditRecipe = (ID, newRecipe) => {
    setData((prev) => {
      const arr = prev.map((recipe) => (recipe.id === ID ? newRecipe : recipe));
      localStorage.setItem("recipe", JSON.stringify(arr));
      return arr;
    });
  };
  const deleteRecipe = (ID) => {
    setData((prev) => {
      const arr = prev.filter(({ id }) => id !== ID);
      localStorage.setItem("recipe", JSON.stringify(arr));
      return arr;
    });
  };

  return (
    <dataContext.Provider
      value={{ data, setData, addRecipe, deleteRecipe, EditRecipe }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
