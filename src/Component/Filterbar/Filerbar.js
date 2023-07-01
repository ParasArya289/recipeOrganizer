import "./Filterbar.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const Filterbar = () => {
  return (
    <div className="filterbar">
      <div className="filterbar-search">
        <MagnifyingGlassIcon/>
        <input type="text" placeholder="Search" />
      </div>
      <div className="filterbar-radio">
        <label htmlFor="filter-radio">
          <input type="radio" placeholder="Search" name="filter-radio" />
          Name
        </label>
        <label htmlFor="filter-radio">
          <input type="radio" placeholder="Search" name="filter-radio" />
          Ingredients
        </label>
        <label htmlFor="filter-radio">
          <input type="radio" placeholder="Search" name="filter-radio" />
          Cuisine
        </label>
      </div>
    </div>
  );
};
