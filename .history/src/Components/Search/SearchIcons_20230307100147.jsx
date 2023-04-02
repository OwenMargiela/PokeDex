import React from "react";
import "./SearchIcons.css";

function SearchIcons({ pokeEntry, valueSearch, pagination, nextUrl, prevUrl }) {
  if (pokeEntry.species) {
    // console.log(pokeEntry.species)
    // console.log(pokeEntry.species[0].name);
    // console.log(pokeEntry.species[0].sprites.front_default);
    return (
      <>
        <div className="prevAndNext">
          <button className="next paginators" onClick={() => pagination(nextUrl)}>
            next
          </button>
          <button className="prev paginators" onClick={() => pagination(prevUrl)}>
            prev
          </button>
        </div>
        <div className="pokemonIcons ">
          {/* {pokeEntry.species.map(entry =>{
            console.log(entry.name)
          })} */}
          {pokeEntry.species.map((entry) => (
            <div
              onClick={() => valueSearch(entry.name)}
              key={entry.id}
              className="icon"
            >
              <img className="iconSprite" src={entry.sprites.front_default} />
              <p className="iconName">{entry.name}</p>
              <div className="typeContainer">
                <p className={entry.types[0].type.name}>
                  {entry.types[0].type.name}
                </p>

                {entry.types[1]?.type.name && (
                  <p className={entry.types[1].type.name}>
                    {entry.types[1]?.type.name}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default SearchIcons;
