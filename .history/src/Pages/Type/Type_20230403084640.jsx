import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Type.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                  <Link to={`/type/${type.name}`}>
                  {type.name}
                  </Link>
                </div>
              ))}
            </div>
            <h2>Not-Very-Effective against</h2>
            <div className="typesFlex">
              {typeData.damage_relations.half_damage_to?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>
                  {type.name}
                  </Link>
                </div>
              ))}
            </div>

            <h2>Not-Effective against</h2>
            <div className="typesFlex">
              {typeData.damage_relations.no_damage_to?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>
                  {type.name}
                  </Link>
                </div>
              )) || "none"}
            </div>
          </div>
          <div className="Defense">
            <h2>Weak to </h2>
            <div className="typesFlex">
              {typeData.damage_relations.double_damage_from?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>
                  {type.name}
                  </Link>
                </div>
              )) || "none"}
            </div>
            <h2>Resist</h2>
            <div className="typesFlex">
              {typeData.damage_relations.half_damage_from?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>
                  {type.name}
                  </Link>
                </div>
              )) || "none"}
            </div>
            <h2>Immune to</h2>
            <div className="typesFlex">
              {typeData.damage_relations.no_damage_from?.map((type, i) => (
                <div className={type.name} key={i}>
                  <Link to={`/type/${type.name}`}>
                  {type.name}
                  </Link>
                </div>
              )) || "none"}
            </div>
          </div>

          <h2>Moves</h2>
          <div className="movesLearned">
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

          <h2>Pokemon</h2>
          <div className="pokemonIcons">
            {pokeSprite?.species.map((pokemon, i) => (
              
              <>
                <div
                  onClick={() => valueSearch(pokemon.id)}
                  key={pokemon.id}
                  className="icon"
                >
                  <Link className="iconSprite" to={`/`}>
                    <img src={pokemon.sprites.front_default} />
                  </Link>
                  <p className="iconName">{pokemon.name}</p>
                  <div className="typeContainer">
                    <p className={pokemon.types[0].type.name}>
                      {pokemon.types[0].type.name}
                    </p>

                    {pokemon.types[1]?.type.name && (
                      <p className={pokemon.types[1].type.name}>
                        {pokemon.types[1]?.type.name}
                      </p>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default Type;
