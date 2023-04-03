import React from "react";
import "./SearchIcons.css";
import arrow from "./unownArrow.svg";
import PokeSprites from "../PokeSprites";
function SearchIcons({ pokeEntry, valueSearch, pagination, nextUrl, prevUrl }) {
  if (pokeEntry.species) {
    // console.log(pokeEntry.species)
    // console.log(pokeEntry.species[0].name);
    // console.log(pokeEntry.species[0].sprites.front_default);
    return (
      <>
        <main className="leftSide">
          {/* <div className="prevAndNext">
          <button className="next-btn paginators" onClick={() => pagination(prevUrl)}>
          
          prev
          </button>
          <button className="prev-btn paginators" onClick={() => pagination(nextUrl)}>
            
          next
          
          </button>
        </div> */}
          <PokeSprites
            valueSearch={valueSearch}
            pokeSprite={pokeSprite}
          ></PokeSprites>
          <div className="prevAndNext">
            <button
              className="next-btn paginators"
              onClick={() => pagination(prevUrl)}
            >
              prev
            </button>
            <button
              className="prev-btn paginators"
              onClick={() => pagination(nextUrl)}
            >
              next
            </button>
          </div>
        </main>
      </>
    );
  }
}

export default SearchIcons;
