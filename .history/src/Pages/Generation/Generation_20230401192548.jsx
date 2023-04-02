import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { boxArt } from "../../GameBoxArt";
import "./Generation.css";

function Generation() {
  const { id } = useParams();
  const [regionData, setRegionData] = useState();

  async function getRegionData() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/generation/${id}`
    );
    setRegionData(data);
    
    getMoveData(data.moves)
  }
  function getMoveData(moves) {
    const request = moves.map((move, i) => axios.get(move.url));
    Promise.all(request).then((response) => {
      const data = response.map((response) => response.data);

      setSortedMoves(data);
    });
  }
  useEffect(() => {
    getRegionData();
  }, []);
  if (regionData) {
    console.log(regionData);
    return (
      <>
        <h2>{regionData?.main_region.name.toUpperCase()}</h2>
        <main className="pokedexData">
          <h2>Types</h2>
          {regionData?.types.map((type, i) => (
            <>
              <div className="typesFlex">
                <div className={type.name} key={i}>
                  {type.name}{" "}
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
        </main>

      </>
    );
  }
}

export default Generation;
