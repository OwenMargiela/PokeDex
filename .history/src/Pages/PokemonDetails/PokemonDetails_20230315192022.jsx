import React from "react";
import "./PokemonDetails.css";

function PokemonDetails({ pokeEntry, pokedexText }) {
  if (pokedexText && pokeEntry.species) {
    let arry = new Array();
    let entries = Object.values(pokeEntry.entry.sprites.versions);
    entries.forEach((elem) => {
      Object.values(elem).forEach((value) => {
        Object.values(value).forEach((sprite, i) => {
          // console.log(sprite)
          if (sprite !== null) {
            arry.push(sprite);
          }
        });
      });
    });

    const englishEntry = pokedexText.flavor_text_entries.filter(
      (entry) => entry.language.name === "en"
    );
    const flavorText = new Set();
    for (let i = 0; i < englishEntry.length; i++) {
      if (flavorText.has(englishEntry[i].flavor_text)) {
        continue;
      } else {
        flavorText.add(englishEntry[i].flavor_text);
      }
    }

    const finalFlavorTextArray = Array.from(flavorText);

    return (
      <>
        <main className="main">
          <div className="pokedexData">
            <div className="genus">{pokedexText.genera[7].genus}</div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeEntry.entry.id}.png`}
              alt=""
            />
            <div className="abilities">
              <ul className="typesList-abilitiesList">
                {pokeEntry.entry.types.map((type, i) => (
                  <li key={i}>{type.type.name}</li>
                ))}
              </ul>
            </div>
            <div className="baseStats"></div>
            <div className="evolutionChart"></div>
            <div className="eggGroups">
              <p>Egg Groups</p>
              {pokedexText.egg_groups.map((group, i) => (
                <div key={i}>{group.name}</div>
              ))}
            </div>
            <div className="pokedexEntries">
              <p>POKEDEX ENTRIES</p>
              {finalFlavorTextArray.map((entry, i) => (
                <div key={i}>{entry}</div>
              ))}
            </div>
            <div className="machineMoves">
              {pokeEntry.entry.moves
                .filter(
                  (move) =>
                    move.version_group_details[0].move_learn_method.name ===
                    "machine"
                )
                .map((move) => (
                  <div>
                    <div className="name">
                      <p>Name</p>
                      <strong>{move.move.name}</strong>
                    </div>
                    <div className="moveLearnMethod">
                      <p>Learn Method</p>
                      <strong>
                        {move.version_group_details[0].move_learn_method.name}
                      </strong>
                    </div>
                  </div>
                ))}
            </div>
            <div className="tutorMoves">
              {pokeEntry.entry.moves
                .filter(
                  (move) =>
                    move.version_group_details[0].move_learn_method.name ===
                    "tutor"
                )
                .map((move) => (
                  <div>
                    <div className="name">
                      <p>Name</p>
                      <strong>{move.move.name}</strong>
                    </div>
                    <div className="moveLearnMethod">
                      <p>Learn Method</p>
                      <strong>
                        {move.version_group_details[0].move_learn_method.name}
                      </strong>
                    </div>
                  </div>
                ))}
            </div>
            <div className="level-upMoves">
              {/* {console.log(pokeEntry.entry.moves[0].version_group_details)} */}
              {
                pokeEntry.entry.moves.sort(
                  (a, b) =>
                  console.log(a.version_group_details[0])
                    // a.version_group_details[0]["level_learned_at"] -
                    // b.version_group_details[0]["level_learned_at"]
                
              )}
              {pokeEntry.entry.moves
                .filter(
                  (move) =>
                    move.version_group_details[0].move_learn_method.name ===
                    "level-up"
                )
                .map((move) => (
                  <div>
                    <div className="name">
                      <p>Name</p>
                      <strong>{move.move.name}</strong>
                    </div>
                    <div className="moveLearnMethod">
                      <p>Learn Method</p>
                      <strong>
                        Level -
                        {
                          move.version_group_details[
                            move.version_group_details.length - 1
                          ].level_learned_at
                        }
                      </strong>
                    </div>
                  </div>
                ))}
            </div>
            <div className="colour">
              <p>Colour</p>
              {pokedexText.color.name}
            </div>
            <div className="captureRate">
              <p>Capture Rate</p>
              {pokedexText.capture_rate}
            </div>
            <div className="pokemonHabitat">
              <p>Habitat</p>
              {pokedexText.habitats?.name || "none"}
            </div>
            <div className="generation">
              {pokedexText.generation.name} Pokemon
            </div>
            <div className="growthRate">
              <p>growth rate</p>
              {pokedexText.growth_rate.name}
            </div>
            <div className="forms">
              {pokedexText.varieties.map((form, i) => (
                <div key={i}>
                  {" "}
                  {form.pokemon.name} {form.pokemon.url}{" "}
                </div>
              ))}
            </div>
            <div className="languages">
              <p>Names</p>
              {pokedexText.names.map((name, i) => (
                <>
                  <div key={i}>
                    {name.language.name}
                    {name.name}
                  </div>
                </>
              ))}
            </div>
            <div className="sprites">
              <p>Sprites</p>
              {arry.map((sprite) =>
                sprite ? (
                  <img className="sprite" src={sprite} alt="" srcset="" />
                ) : null
              )}
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default PokemonDetails;
