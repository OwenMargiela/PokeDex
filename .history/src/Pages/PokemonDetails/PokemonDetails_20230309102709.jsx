import React from "react";
import "./PokemonDetails.css";

function PokemonDetails({ pokeEntry, pokedexText }) {
  if (pokedexText && pokeEntry.species) {
    console.log(pokeEntry, pokedexText);
    return (
      <>
        <main className="main">
          <div className="pokedexData">
            <div className="genus">
                {pokedexText.genera[7].genus}
            </div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeEntry.entry.id}.png`} alt="" />
            <div className="abilities">
            <ul className="typesList-abilitiesList">
              {pokeEntry.entry.types.map((type, i) => (
                <li key={i}>{type.type.name}</li>
              ))}
            </ul>
            </div>
            <div className="baseStats">

            </div>
            <div className="evolutionChart"></div>
            <div className="eggGroups">
                <p>Egg Groups</p>
                {pokedexText.egg_groups.map((group,i)=>(
                    <div key={i}>{group.name}</div>
                ))}
            </div>
            <div className="pokedexEntries">
            <p>POKEDEX ENTRIES</p>
            {/* {pokedexText.flavor_text_entries.filter(
              (entry) => entry.language.name === "en"
            ).map((entry,i) =>(
              <div key={i} >{entry.flavor_text}</div>
            ))
            } */}
            </div>
            <div className="gameIndexes"></div>
            <div className="machineMoves"></div>
            <div className="tutorMoves"></div>
            <div className="level-upMoves"></div>
            <div className="pokemonHabitat">
            <p>Habitat</p>
                {pokedexText.habitat.name}
            </div>
            <div className="growthRate"></div>
            <div className="forms"></div>
            <div className="languages"></div>
          </div>
          <div className="sprites"></div>
        </main>
      </>
    );
  }
}

export default PokemonDetails;
