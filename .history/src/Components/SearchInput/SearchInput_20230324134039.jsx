import React from "react";
import "./SearchInput.css";
import pokeball from "./pokeball.png";
function SearchInput({ valueSearch,getTypeData, value, setValue }) {
  return (
    <>
      <div className="group">
        <img
          onClick={() => valueSearch(value||getTypeData)}
          src={pokeball}
          className="valueSearchIcon"
        />
        <input 
        placeholder="pokemon..." 
        type="search" 
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value) } />
      </div>
    </>
  );
}

export default SearchInput;
