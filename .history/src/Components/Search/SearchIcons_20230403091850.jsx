import React from "react";
import "./SearchIcons.css";
import PokeSprites from "../PokeSprites";
function SearchIcons({ pokeEntry, valueSearch, pagination, nextUrl, prevUrl }) {
  if (pokeEntry.species) {
    return (
      <>
        <main className="leftSide">
          <PokeSprites
            valueSearch={valueSearch}
            pokeSprite={pokeEntry}
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
