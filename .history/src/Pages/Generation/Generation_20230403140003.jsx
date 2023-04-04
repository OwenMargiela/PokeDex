import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { boxArt } from "../../GameBoxArt";
import "./Generation.css";
import PokeSprites from "../../Components/PokeSprites";
import MovesTable from "../../Components/MovesTable/MovesTable";

function Generation({ valueSearch }) {
  const { id } = useParams();
  const [regionData, setRegionData] = useState();
  const [sortedMoves, setSortedMoves] = useState([]);
  const [pokeSprite, SetPokeSprite] = useState();

  async function getRegionData() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/generation/${id}`
    );
    setRegionData(data);
    getSpecies(data.pokemon_species);
    getMoveData(data.moves);
  }
  function getMoveData(moves) {
    const request = moves.map((move, i) => axios.get(move.url));
    Promise.all(request).then((response) => {
      const data = response.map((response) => response.data);

      setSortedMoves(data);
    });
  }
  async function getSpecies(res) {
    const requests = res.map((obj) => axios.get(obj.url));

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response) => response.data);

        SetPokeSprite((prevState) => ({
          ...prevState,
          entry: data,
        }));
        getSpriteandName(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function getSpriteandName(res) {
    const requests = res.map((obj) =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${obj.id}/`)
    );

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response) => response.data);

        SetPokeSprite((entry) => ({
          ...entry,
          species: data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getRegionData();
  }, []);
  if (pokeSprite?.species) {
    console.log(pokeSprite.species);
    return (
      <>
        <h2>{regionData?.main_region.name.toUpperCase()}</h2>
        <main className="pokedexData">
          <h2>Types</h2>
          {regionData?.types.map((type, i) => (
            <>
              <div className="typesFlex">
                <div className={type.name} key={i}>
                  <Link to={`/types/${type.name}`}>{type.name} </Link>
                </div>
              </div>
            </>
          ))}
          <h2>Games</h2>
          <div className="games">
            {boxArt
              .filter((art) => art.region === regionData?.main_region.name)
              .map((boxArt) => (
                <img className="boxArt" src={boxArt.path} alt="" srcset="" />
              ))}
          </div>
          <div className="movesLearned">
            <MovesTable sortedMoves={sortedMoves}></MovesTable>
          </div>
          <PokeSprites
            valueSearch={valueSearch}
            pokeSprite={pokeSprite}
          ></PokeSprites>
        </main>
      </>
    );
  }
}

export default Generation;