import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput({ valueSearch, value, setValue }) {
  return (
    <>
      <div className="group">
        <img
          onClick={() => valueSearch(value.toLowerCase())}
          src={pokeball}
          className="valueSearchIcon"
        />
        <input 
        placeholder="pokemon..." 
        type="search" 
        class="input"
        value={value}
        onChange={(e) => setValue(e.target.value) } />
      </div>
    </>
  );
}

export default SearchInput;
