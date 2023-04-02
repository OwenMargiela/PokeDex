import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput({ valueSearch, value }) {
  return (
    <>
      <div class="group">
        <img
          onClick={() => valueSearch(value)}
          src={pokeball}
          className="icon"
        />
        <input 
        placeholder="pokemon..." 
        type="search" 
        class="input"
        value={value} />
      </div>
    </>
  );
}

export default SearchInput;
