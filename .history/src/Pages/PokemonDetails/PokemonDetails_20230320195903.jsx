import axios from "axios";
import React, { useEffect, useState, version } from "react";
import "./PokemonDetails.css";

function PokemonDetails({ pokeEntry, pokedexText }) {
  if (pokedexText && pokeEntry.species) {
    const [moves, setMoves] = useState(pokeEntry.entry.moves);
    const [sortedMoves, setSortedMoves] = useState({ moves: null, data: null });
    const [locationAreas, setLocationAreas] = useState();

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

    useEffect(() => {
      setSortedMoves((prevState) => ({
        ...prevState,
        moves: moves.sort(
          (a, b) =>
            a.version_group_details[a.version_group_details.length - 1]
              .level_learned_at -
            b.version_group_details[b.version_group_details.length - 1]
              .level_learned_at
        ),
      }));

      async function getMoveData() {
        const request = moves?.map((move) => axios.get(move.move.url));
        Promise.all(request)
          .then((responses) => {
            const data = responses.map((response) => response.data);
            setSortedMoves((sortedMoves) => ({
              ...sortedMoves,
              data: data,
            }));
          })
          .catch((error) => {
            console.error(error);
          });
      }
      getMoveData();

      async function getLocations() {
        const { data } = await axios.get(
          pokeEntry.entry.location_area_encounters
        );
        setLocationAreas(data);
      }
      getLocations();
    }, [pokedexText]);

    if (locationAreas) {
      locationAreas?.map((location) =>
        location.version_details.map((version) => {
          console.log(version.version.name, location.location_area.name);
        })
      );
    }
    if (sortedMoves.moves && sortedMoves.data) {
      sortedMoves.moves.forEach((elem, i) => (elem.data = sortedMoves.data[i]));
      // console.log(sortedMoves.moves[0].data)
      return (
        <>
          <main className="mainPokedata">
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

                <table>
                  <tbody>
                    <tr>
                      <td>Egg Groups</td>
                      <td>
                        {pokedexText.egg_groups.map((group, i) => (
                          <div key={i}>{group.name}</div>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td>Colour</td>
                      <td>{pokedexText.color.name}</td>
                    </tr>
                    <tr>
                      <td>Capture Rate</td>
                      <td>{pokedexText.capture_rate}</td>
                    </tr>
                    <tr>
                      <td>Habitat</td>
                      {/* {console.log(pokedexText)} */}
                      <td>{pokedexText.habitat?.name || "none"}</td>
                    </tr>
                    <tr>
                      <td>{pokedexText.generation.name} Pokemon</td>
                    </tr>
                    <tr>
                      <td>growth rate</td>
                      <td>{pokedexText.growth_rate.name}</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>{pokeEntry.entry.height/10}m </td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>{pokeEntry.entry.weight/10}kg</td>
                    </tr>
                    {pokeEntry.entry.held_items.length > 0 ? (
                      <tr>
                        <td>Held Item</td>
                        <td>
                          {pokeEntry.entry.held_items.map((items, i) => (
                            <div>{items.item.name}</div>
                          ))}
                        </td>
                      </tr>
                    ) : null}
                   
                  </tbody>
                </table>
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
              <div className="abilities">
              <h3>Abilities</h2>
                        {pokeEntry.entry.abilities.map((ability, i) => (
                          <li className="abilitiesItem" key={i}>
                            {ability.ability.name}
                          </li>
                        ))}
                      
                    
              </div>
              <div className="pokedexEntries">
                <h2>POKEDEX ENTRY</h2>
                <h3>{pokeEntry.entry.name.toUpperCase()}</h3>
                <div className="pokeEntryPrime pokeEntry">
                  {finalFlavorTextArray[finalFlavorTextArray.length-1]}
                </div>
                <button>Show More</button>
                {finalFlavorTextArray.map((entry, i) => (
                  <div className="pokeEntry" key={i}>
                    {entry}
                  </div>
                ))}
              </div>
              <div className="moves">
                <div className="flex">
                  <div className="tutorMoves">
                    <table>
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <th>Power</th>
                          <th>Accuracy</th>
                          <th>Type</th>
                          <th>Damage Class</th>
                          <th>PP</th>
                          <th>Learn Method</th>
                        </tr>

                        {sortedMoves?.moves
                          ?.filter(
                            (move) =>
                              move.version_group_details[0].move_learn_method
                                .name === "tutor"
                          )
                          .map((move) => (
                            <tr>
                              <td>{move.move.name}</td>
                              <td>{move.data.power}</td>
                              <td>{move.data.accuracy}</td>
                              <td className={move.data.type.name}>
                                {move.data.type.name}
                              </td>
                              <td>{move.data.damage_class.name}</td>
                              <td>{move.data.pp}</td>
                              <td>
                                {
                                  move.version_group_details[0]
                                    .move_learn_method.name
                                }
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="level-upMoves">
                    <table>
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <th>Power</th>
                          <th>Accuracy</th>
                          <th>Type</th>
                          <th>Damage Class</th>
                          <th>PP</th>
                          <th>Learn Method</th>
                        </tr>

                        {sortedMoves?.moves
                          ?.filter(
                            (move) =>
                              move.version_group_details[0].move_learn_method
                                .name === "level-up"
                          )
                          .map((move) => (
                            <tr>
                              <td>{move.move.name}</td>
                              <td>{move.data.power}</td>
                              <td>{move.data.accuracy}</td>
                              <td className={move.data.type.name}>
                                {move.data.type.name}
                              </td>
                              <td>{move.data.damage_class.name}</td>
                              <td>{move.data.pp}</td>
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
                </div>
                <div className="machineMoves">
                  <table className="machineMovesTable">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>Power</th>
                        <th>Accuracy</th>
                        <th>Type</th>
                        <th>Damage Class</th>
                        <th>PP</th>
                        <th>Learn Method</th>
                      </tr>
                      {sortedMoves?.moves
                        ?.filter(
                          (move) =>
                            move.version_group_details[0].move_learn_method
                              .name === "machine"
                        )
                        .map((move) => (
                          <tr>
                            <td>{move.move.name}</td>
                            <td>{move.data.power}</td>
                            <td>{move.data.accuracy}</td>
                            <td className={move.data.type.name}>
                              {move.data.type.name}
                            </td>
                            <td>{move.data.damage_class.name}</td>
                            <td>{move.data.pp}</td>
                            <td>
                              {
                                move.version_group_details[0].move_learn_method
                                  .name
                              }
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="languages">
                <h3>Names</h3>

                <table>
                  <tbody>
                    <tr>
                      <th>Language</th>
                      <th>Name</th>
                    </tr>
                    {pokedexText.names.map((name, i) => (
                      <tr>
                        <td>{name.language.name}</td>
                        <td>{name.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="locations">
                <table>
                  <tbody>
                    {locationAreas?.map((location) =>
                      location.version_details.map((version) => {
                        console.log(
                          version.version.name,
                          location.location_area.name
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              <div className="forms">
                {pokedexText.varieties.map((form, i) => (
                  <div key={i}>
                    {" "}
                    {form.pokemon.name} {form.pokemon.url}{" "}
                  </div>
                ))}
              </div>
              <div className="sprites">
                <h3>Sprites</h3>
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
}

export default PokemonDetails;
