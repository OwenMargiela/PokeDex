import React from "react";
import { useParams } from "react-router-dom";
import "./Type.css";
function Type() {
  const { id } = useParams();
  return (
    <>
      <h2>{id}</h2>;
      <main className="pokedexData">

      </main>
    </>
  );
}

export default Type;
