import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput() {
  return (
    <>
    
      <div class="group">
        <img src={pokeball} className="icon" />
        <input placeholder="pokemon..." type="search" class="input" />
      </div>
    </>
  );
}

export default SearchInput;
