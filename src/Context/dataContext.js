import { createContext, useContext, useEffect, useState } from "react";
import { recipes } from "../db";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([...recipes]);

  useEffect(()=>{
    const recipes = localStorage.getItem("recipe")
    setData(JSON.parse(recipes))
  },[])
  const addRecipe = (recipe) => {
    setData((prev) => [...prev, recipe]);
    localStorage.setItem("recipe", JSON.stringify(data));
  };
  const EditRecipe = (id, recipe) => {
    // setData((prev) => [...prev, recipe]);
  };
  const deleteRecipe = (id) => {
    setData((prev) => prev.filter(({ name }) => name !== id));
    localStorage.setItem("recipe", JSON.stringify(data));
  };

  return (
    <dataContext.Provider value={{ data, setData, addRecipe, deleteRecipe }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
