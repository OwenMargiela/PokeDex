import React from "react";
import "./SearchInput.css";

function SearchInput() {
  return (
    <>
      <input
        type="text"
        name="text"
        class="input"
        placeholder="Pokemon..."
      ></input>
    </>
  );
}

export default SearchInput;
