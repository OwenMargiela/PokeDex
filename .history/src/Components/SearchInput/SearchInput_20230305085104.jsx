import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput({ valueSearch, value, setValue }) {
  return (
    <>
      <div class="group">
        <img
          onClick={() => valueSearch(value)}
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
