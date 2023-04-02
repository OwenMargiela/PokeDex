import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PokemonDetails.css";

function PokemonDetails({ pokeEntry, pokedexText }) {
  if (pokedexText && pokeEntry.species) {
    const [moves, setMoves] = useState(pokeEntry.entry.moves);
    const [moveDescription, setMoveDescription] = useState();
    

    // const [evolutionDetils,setEvolutionDetails] = useState([])
    let arry = new Array();
    let entries = Object.values(pokeEntry.entry.sprites.versions);
    entries.forEach((elem) => {
      Object.values(elem).forEach((value) => {
        Object.values(value).forEach((sprite, i) => {
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

    const sortedMoves = moves.sort(
      (a, b) =>
        a.version_group_details[a.version_group_details.length - 1]
          .level_learned_at -
        b.version_group_details[b.version_group_details.length - 1]
          .level_learned_at
    );
    setMoves(sortedMoves)

    // async function getMoveData() {
    //   const request = sortedMoves.map((move) => axios.get(move.move.url));
    //   Promise.all(request).then((responses) => {
    //     const data = responses.map((response) => response.data);
    //     setMoveDescription(data)
    //     // console.log(moveDescription)
    //   });
    // }

    // useEffect(() => {
    //   getMoveData();
    // }, []);
    // if(sortedMoves)
    // {
    //   console.log(sortedMoves)
    // }

    return (
      <>
        <main className="main">
          <div className="pokedexData">
            <div className="header">
              <div className="artworkAndType">
                <div className="genus">{pokedexText.genera[7].genus}</div>
                <img
                  className="officialArtWork"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeEntry.entry.id}.png`}
                  alt=""
                />
                <div className="types">
                  <ul className="typesList-abilitiesList">
                    {pokeEntry.entry.types.map((type, i) => (
                      <li key={i}>{type.type.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="baseStats">
                <table className="statsTable">
                  <tbody>
                    {pokeEntry.entry.stats.map((stat) => (
                      <tr>
                        <td>{stat.stat.name}</td>
                        <td>{stat.base_stat}</td>
                        <td>
                          <div
                            class="bar-chart"
                            style={{
                              width: `${stat.base_stat * 1.5}` + "px",
                              height: 12 + "px",
                            }}
                          ></div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="eggGroups">
              <h3>Egg Groups</h3>
              {pokedexText.egg_groups.map((group, i) => (
                <div key={i}>{group.name}</div>
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
            <div className="pokedexEntries">
              <p>POKEDEX ENTRIES</p>
              <h3>{pokeEntry.entry.name.toUpperCase()}</h3>
              {finalFlavorTextArray.map((entry, i) => (
                <div className="pokeEntry" key={i}>
                  {entry}
                </div>
              ))}
            </div>
            <div className="moves">
              <div className="machineMoves">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Learn Method</th>
                  </tr>
                  {sortedMoves
                    .filter(
                      (move) =>
                        move.version_group_details[0].move_learn_method.name ===
                        "machine"
                    )
                    .map((move) => (
                      <tr>
                        <td>{move.move.name}</td>
                        <td>
                          {move.version_group_details[0].move_learn_method.name}
                        </td>
                        
                      </tr>
                    ))}
                </table>
              </div>
              <div className="tutorMoves">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Learn Method</th>
                  </tr>

                  {sortedMoves
                    .filter(
                      (move) =>
                        move.version_group_details[0].move_learn_method.name ===
                        "tutor"
                    )
                    .map((move) => (
                      <tr>
                        <td>{move.move.name}</td>
                        <td>
                          {move.version_group_details[0].move_learn_method.name}
                        </td>
                      </tr>
                    ))}
                </table>
              </div>
              <div className="level-upMoves">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Learn Method</th>
                  </tr>

                  <tbody>
                    {sortedMoves
                      .filter(
                        (move) =>
                          move.version_group_details[0].move_learn_method
                            .name === "level-up"
                      )
                      .map((move) => (
                        <tr>
                          <td>{move.move.name}</td>
                          <td>
                            Level -{" "}
                            {
                              move.version_group_details[
                                move.version_group_details.length - 1
                              ].level_learned_at
                            }
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="eggMoves">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Learn Method</th>
                  </tr>

                  <tbody>
                    {sortedMoves
                      .filter(
                        (move) =>
                          move.version_group_details[0].move_learn_method
                            .name === "egg"
                      )
                      .map((move) => (
                        <tr>
                          <td>{move.move.name}</td>
                          <td>
                            egg
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
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
