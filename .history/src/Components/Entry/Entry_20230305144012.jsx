import React from "react";
import "./Entry.css";
function Entry({ pokeEntry }) {
  if (pokeEntry) {
    // console.log(pokeEntry);
    return (
      <>
        <div className="pokemonEntryContainer fW-700">
          <figure>
            <img
              className="pokemonImagePrime"
            //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeEntry.id}.png`}
              alt="Lucario"
            />
          </figure>
          <span className="dexNumber">#{pokeEntry.id}</span>
          {/* <div className="pokemonName">{pokeEntry.name}</div> */}
          <div className="types">
            {/* <ul className="typesList-abilitiesList">
              {pokeEntry.types.map((type, i) => (
                <li key={i}>{type.type.name}</li>
              ))}
            </ul> */}
          </div>
          <div className="pokedexEntry">
            <p>POKEDEX ENTRY</p>
            <p className="entryText">
              {/* {speciesdata.flavor_text_entries[6].flavor_text} */}
              It has the ability to sense the\nauras of all things.\nIt
              understands human speech.
            </p>
          </div>
          <div className="abilities">
            <p>Abilities</p>
            <ul className="typesList-abilitiesList">
              {/* {pokeEntry.abilities.map((ability, i) => (
                <li className="abilitiesItem" clas key={i}>
                  {ability.ability.name}
                </li>
              ))} */}
            </ul>
          </div>
          <div className="miscellaneous">
            <ul className="miscellaneousList">
              <li className="height">1.7m</li>
              <li className="weight">150kg</li>
            </ul>
          </div>

          <div className="stats">
            <div className="statHeading">
              <span>hp</span>
              <span>atk</span>
              <span>def</span>
              <span>SpA</span>
              <span>SpD</span>
              <span>spd</span>
            </div>
            <ul className="statsList">
              {/* {pokeEntry.stats.map((stat, i) => (
                <li key={i} className="statContainer">
                  <div>
                    <span>{stat.base_stat}</span>
                  </div>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Entry;
