import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { boxArt } from "../../GameBoxArt";


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
    return (
      <>
        <h2>{regionData?.main_region.name}</h2>
        <h2>{regionData?.version_groups[0].name}</h2>
        {regionData?.types.map((type, i) => (
          <p key={i}>{type.name} </p>
        ))}
        {console.log(boxArt[0].path)}
        <img src="boxArtAssest/Crystal_Box_Art.jpg" alt="" srcset="" />
        
      </>
    );
  }
}

export default Generation;
