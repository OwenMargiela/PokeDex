import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput({ valueSearch, value, setValue }) {
 
  return (
    <>
      <div class="group">
        <img 
        onClick={valueSearch()}
        src={pokeball} 
        className="icon" />
        
        <input
          placeholder="pokemon..."
          type="search"
          class="input"
        //   value={value}
        //   onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </>
  );
}

export default SearchInput;
