import React from "react";
import { Link } from "react-router-dom";
import "./Entry.css";
function Entry({ pokeEntry, pokedexText }) {
  if (pokeEntry.entry) {
    // console.log(pokeEntry);
    return (
      <>
        <div className="pokemonEntryContainer fW-700">
          <figure>
            <Link to={`pokemon/${pokeEntry.entry.name}`}>
              <img
                className="pokemonImagePrime"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeEntry.entry.id}.png`}
                alt="Lucario"
              />
            </Link>
          </figure>
          <span className="dexNumber">#{pokeEntry.entry.id}</span>
          <div className="pokemonName">{pokeEntry.entry.name}</div>
          <div className="types">
            <ul className="typesList-abilitiesList">
              {pokeEntry.entry.types.map((type, i) => (
                <li key={i}>
                  <Link to={`type/${type.type.name}`}>{type.type.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pokedexEntry">
            <p>POKEDEX ENTRY</p>
            {pokedexText.flavor_text_entries
              .filter((entry) => entry.language.name === "en")
              .slice(0, 1)
              .map((entry, i) => (
                <span key={i}>{entry.flavor_text}</span>
              ))}
          </div>
          <div className="abilities">
            <p>Abilities</p>
            <ul className="typesList-abilitiesList">
              {pokeEntry.entry.abilities.map((ability, i) => (
                <li className="abilitiesItem" key={i}>
                  <Link to={`/abilities/${ability.ability.na}`}>
                    {ability.ability.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="miscellaneous">
            <ul className="miscellaneousList">
              <li className="height">{pokeEntry.entry.height / 10}m</li>
              <li className="weight">{pokeEntry.entry.weight / 10}kg</li>
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
              {pokeEntry.entry.stats.map((stat, i) => (
                <li key={i} className="statContainer">
                  <div>
                    <span>{stat.base_stat}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Entry;
