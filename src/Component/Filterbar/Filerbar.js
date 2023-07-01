import "./Filterbar.css";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useData } from "../../Context/dataContext";
import { useRef, useState } from "react";
import { SearchPopover } from "../SearchPopover/SearchPopover";

export const Filterbar = () => {
  const [radio, setRadio] = useState("name");
  const { search, filteredData } = useData();
  const inputRef = useRef(null);
  return (
    <div className="filterbar">
      <div className="filterbar-search">
        <MagnifyingGlassIcon />
        <SearchPopover array={filteredData} inputRef={inputRef}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="searchbar"
            onChange={(e) => search(e.target.value, radio)}
          />
        </SearchPopover>
      </div>
      <div className="filterbar-radio">
        <label htmlFor="filter-radio">
          <input
            type="radio"
            placeholder="Search"
            defaultChecked
            value={"name"}
            name="filter-radio"
            onChange={(e) => setRadio(e.target.value)}
          />
          Name
        </label>
        <label htmlFor="filter-radio">
          <input
            type="radio"
            placeholder="Search"
            value={"ingredients"}
            name="filter-radio"
            onChange={(e) => setRadio(e.target.value)}
          />
          Ingredients
        </label>
        <label htmlFor="filter-radio">
          <input
            type="radio"
            placeholder="Search"
            value={"type"}
            name="filter-radio"
            onChange={(e) => setRadio(e.target.value)}
          />
          Cuisine
        </label>
      </div>
    </div>
  );
};
