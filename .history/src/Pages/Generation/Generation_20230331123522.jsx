import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return (
    <>
      <div>{id}</div>
      <h2>
        {regionData.main_region.name}
      </h2>
      <h2>
        {regionData.version_groups[0].name}
      </h2>
      {regionData.type.map((type) =>(
        <p>
            {type}
        </p>
      ))}
    </>
  );
}

export default Generation;
