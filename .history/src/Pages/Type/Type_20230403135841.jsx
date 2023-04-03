import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Type.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PokeSprites from "../../Components/PokeSprites";
import MovesTable from "../../Components/MovesTable/MovesTable";
function Type({ valueSearch }) {
  const { id } = useParams();
  const [typeData, SetTypeData] = useState();
  const [pokeSprite, SetPokeSprite] = useState();
  const [sortedMoves, setSortedMoves] = useState([]);
  const [inputValue, setInputValue] = useState("");
  async function getTypeData() {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${id}/`);
    SetTypeData(data);
    getSpriteAndNAme(data.pokemon);
    getMoveData(data.moves);
  }
  async function getSpriteAndNAme(res) {
    const requests = res.map((obj) => axios.get(obj.pokemon.url));

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response) => response.data);

        SetPokeSprite((prevState) => ({
          ...prevState,
          species: data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function getMoveData(moves) {
    const request = moves.map((move, i) => axios.get(move.url));
    Promise.all(request).then((response) => {
      const data = response.map((response) => response.data);

      setSortedMoves(data);
    });
  }
  useEffect(() => {
    getTypeData();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLocation =
      "http://localhost:5174/type/" + inputValue.toLowerCase();
    window.location.href = newLocation;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  if (typeData && sortedMoves) {
    return (
      <>
        Search a Pokemon Type:
        <form className="group" onSubmit={handleSubmit}>
          <label>
            <input
              className="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <button className="valueSearchIcon" type="submit">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="2xs" />
          </button>
        </form>
        <h2>{id}</h2>
        <main className="pokedexData">
          <h2>Introduced in</h2>
          <h4>{typeData.generation.name.toUpperCase()}</h4>

          <div className="Attack">
            <h2>Super-Effective against</h2>

            <div className="typesFlex">
              {typeData.damage_relations.double_damage_to?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>{type.name}</Link>
                </div>
              ))}
            </div>
            <h2>Not-Very-Effective against</h2>
            <div className="typesFlex">
              {typeData.damage_relations.half_damage_to?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>{type.name}</Link>
                </div>
              ))}
            </div>

            <h2>Not-Effective against</h2>
            <div className="typesFlex">
              {typeData.damage_relations.no_damage_to?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>{type.name}</Link>
                </div>
              )) || "none"}
            </div>
          </div>
          <div className="Defense">
            <h2>Weak to </h2>
            <div className="typesFlex">
              {typeData.damage_relations.double_damage_from?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>{type.name}</Link>
                </div>
              )) || "none"}
            </div>
            <h2>Resist</h2>
            <div className="typesFlex">
              {typeData.damage_relations.half_damage_from?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>{type.name}</Link>
                </div>
              )) || "none"}
            </div>
            <h2>Immune to</h2>
            <div className="typesFlex">
              {typeData.damage_relations.no_damage_from?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>{type.name}</Link>
                </div>
              )) || "none"}
            </div>
          </div>

          <MovesTable
          sortedMoves={sortedMoves}
          ></MovesTable>

          <h2>Pokemon</h2>
          <PokeSprites
            valueSearch={valueSearch}
            pokeSprite={pokeSprite}
          ></PokeSprites>
        </main>
      </>
    );
  }
}

export default Type;
