import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { boxArt } from "../../GameBoxArt";
import "./Generation.css";

function Generation() {
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
    console.log(res)
    const requests = res.map((obj) =>
      axios.get(obj.url)
    );

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response) => response.data);

        SetPokeSprite((prevState) => ({
          ...prevState,
          species: data,
        }));
        getSpriteandName(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function getSpriteandName(res) {
    
    const requests = res.map((obj) =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${obj.order}/`)
    );

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response) => response.data);

        SetPokeSprite((species) => ({
          ...species,
          sprite: data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });

  }


  useEffect(() => {
    getRegionData();
  }, []);
  if (regionData) {
    console.log(pokeSprite);
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
          {boxArt
            .filter((art) => art.region === regionData?.main_region.name)
            .map((boxArt) => (
              <img className="boxArt" src={boxArt.path} alt="" srcset="" />
            ))}
          <div className="movesLearned">
            <h2>New Moves</h2>
            <table className="center">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Power</th>
                  <th>Accuracy</th>
                  <th>Type</th>
                  <th>Damage Class</th>
                  <th>PP</th>
                  <th>Genration</th>
                </tr>

                {sortedMoves?.map((move) => (
                  <>
                    <tr>
                      <Link to={`/moves/${move.name}`}>
                        <td>{move.name}</td>
                      </Link>
                      <td>{move.power}</td>
                      <td>{move.accuracy}</td>
                      <td className={move.type.name}>{move.type.name}</td>
                      <td>{move.damage_class.name}</td>
                      <td>{move.pp}</td>
                      <td>{move.generation.name}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </>
    );
  }
}

export default Generation;
