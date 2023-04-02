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
    </>
  );
}

export default Generation;
