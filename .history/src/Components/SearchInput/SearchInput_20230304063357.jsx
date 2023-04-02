import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput({ valueSearch, value, setValue }) {
  function helperSearch() {
    console.log(value);
  }
  return (
    <>
      <div class="group">
        <img
          value={value}
          onChange={setValue(e.target.value)}
          onClick={helperSearch}
          src={pokeball}
          className="icon"
        />
        <input placeholder="pokemon..." type="search" class="input" />
      </div>
    </>
  );
}

export default SearchInput;
