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
    console.log(data);
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
          
          <h2>New Types</h2>
          {regionData?.types.map((type, i) => (
            <>
            <div className={type.name} key={i}>
              {type.name}{" "}
            </div>
            </>
          ))}

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
