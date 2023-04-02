import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput({valueSearch,value,setValue}) {
  
    function helperSearch(){
        valueSearch()
    }
  return (
    <>
      <div class="group">
        <img onChange={(e) => console.log(e)} src={pokeball} className="icon" />
        <input placeholder="pokemon..." type="search" class="input" />
      </div>
    </>
  );
}

export default SearchInput;
