import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MoveInfo.css";
function MoveInfo({ valueSearch }) {
  const [moveData, SetMoveData] = useState();
  const [pokeSprite, SetPokeSprite] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function getMoveData() {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/move/${id}/`);
      SetMoveData(data);
      getSpriteAndNAme(data.pokemon);
    }

    async function getSpriteAndNAme(res) {
      console.log(res)
      // const requests = res.map((obj) => axios.get(obj.url));

      // Promise.all(requests)
      //   .then((responses) => {
      //     const data = responses.map((response) => response.data);

      //     SetPokeSprite((prevState) => ({
      //       ...prevState,
      //       species: data,
      //     }));
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    }
    getMoveData();
  }, []);

  if (moveData && pokeSprite) {
    const englishEntry = moveData.flavor_text_entries.filter(
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

    // console.log(pokeSprite.species);
    return (
      <>
        <h1>{id}</h1>
        <div className="mainPokedata">
          <h2>Move Data</h2>
          <div className="headElem">
            <table className="moveDataTable">
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>{moveData.type.name}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{moveData.damage_class.name}</td>
                </tr>
                <tr>
                  <td>Power</td>
                  <td>{moveData.power}</td>
                </tr>
                <tr>
                  <td>Accuracy</td>
                  <td>{moveData.accuracy}</td>
                </tr>
                <tr>
                  <td>PP</td>
                  <td>{moveData.pp}</td>
                </tr>
                <tr>
                  <td>Introduced In</td>
                  <td>{moveData.generation.name}</td>
                </tr>
                <tr>
                  <td>Priority</td>
                  <td>{moveData.priority}</td>
                </tr>
              </tbody>
            </table>
            <div className="Effects">
              <div className="shortEffect">
                <h2>Effect</h2>
                <p>{moveData?.effect_entries[0].effect}</p>
              </div>
              <div className="longEffect">
                <h2>Short Effect</h2>
                <p>{moveData?.effect_entries[0].short_effect}</p>
              </div>
              <div className="target">
                <h2>Target</h2>
                <p>{moveData.target.name}</p>
              </div>
              <div className="contestType">
                <h2>Contest Type</h2>
                <p>{moveData.contest_type?.name || "none"} </p>
              </div>
            </div>
          </div>
          <div className="flavorTextEntries">
            <h2>Flavor Text</h2>
            {finalFlavorTextArray.map((text, i) => (
              <div className="pokeEntry" key={i}>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <h2>Learned By</h2>
          <div className="pokemonIcons">
            {pokeSprite?.species.map((pokemon, i) => (
              // <div className="Sprite" key={i}>
              //   <img src={pokemon.sprites.front_default} alt="" />
              //   <p>{pokemon.name}</p>
              // </div>
              <>
                <div
                  onClick={() => valueSearch(pokemon.name)}
                  key={pokemon.id}
                  className="icon"
                >
                  <Link className="iconSprite" to={`/`}>
                    <img
                      src={pokemon.sprites.front_default}
                    />
                  </Link>
                  <p className="iconName">{pokemon.name}</p>
                  <div className="typeContainer">
                    <p className={pokemon.types[0].type.name}>
                      {pokemon.types[0].type.name}
                    </p>

                    {pokemon.types[1]?.type.name && (
                      <p className={pokemon.types[1].type.name}>
                        {pokemon.types[1]?.type.name}
                      </p>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default MoveInfo;
