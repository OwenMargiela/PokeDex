import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput({ valueSearch, value, setValue }) {
  function helperSearch(pokemon) {
    console.log(pokeball)
  }
  return (
    <>
      <div class="group">
        <img
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={helperSearch(value)}
          src={pokeball}
          className="icon"
        />
        <input placeholder="pokemon..." type="search" class="input" />
      </div>
    </>
  );
}

export default SearchInput;
