import React from "react";
import { useParams } from "react-router-dom";
import "./Type.css";
function Type() {
  const { id } = useParams();
  return (
    <>
      <h2>{id}</h2>
      <main className="pokedexData">
        <h2>
            Introduced in
        </h2>
        <p>Generation- ii</p>
        <h2>Moves</h2>
        <p>Move</p>
        <h2>Pokemon</h2>
        <p>Pokemon</p>

        <div className="Attack">
            <h2>Super-Effective against</h2>
            <h2>Not-Very-Effective against</h2>
            <h2>No-Effective against</h2>
        </div>
        <div className="Defense">
            <h2>Weak to </h2>
            <h2>Resist</h2>
            <h2>Immune to</h2>
        </div>
      </main>
    </>
  );
}

export default Type;
