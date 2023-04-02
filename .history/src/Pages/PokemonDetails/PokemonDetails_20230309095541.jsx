import React from "react";
import "./PokemonDetails.css";

function PokemonDetails({ pokeEntry, pokedexText }) {
    if (pokeEntry && pokedexText) {
      console.log(pokeEntry, pokedexText);
    return (
      <>
        <main className="main">
          <div className="pokedexData">
            <div className="genus"></div>
            <img src="" alt="" />

            <div className="baseStats"></div>
            <div className="evolutionChart"></div>
            <div className="pokedexEntries"></div>
            <div className="gameIndexes"></div>
            <div className="machineMoves"></div>
            <div className="tutorMoves"></div>
            <div className="level-upMoves"></div>
            <div className="pokemonHabitat"></div>
            <div className="growthRate"></div>
            <div className="forms"></div>
            <div className="languages"></div>
          </div>
          <div className="sprites"></div>
        </main>
      </>
    );
  }
}

export default PokemonDetails;
