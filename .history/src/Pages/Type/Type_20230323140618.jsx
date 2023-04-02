import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokeSprites from "../../Components/PokeSprites";
import "./Type.css";
function Type() {
  const { id } = useParams();
  const [typeData, SetTypeData] = useState();
  const [pokeSprite, SetPokeSprite] = useState();
  const [sortedMoves, setSortedMoves] = useState({ moves: null, data: null });
  useEffect(() => {
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
    getTypeData();
  }, []);
  if (typeData) {
    // console.log(sortedMoves)
    return (
      <>
        <h2>{id}</h2>
        <main className="pokedexData">
          <h2>Introduced in</h2>
          <p>{typeData.generation.name}</p>

          <div className="Attack">
            <h2>Super-Effective against</h2>

            {typeData.damage_relations.double_damage_to?.map((type, i) => (
              <div key={i}>{type.name}</div>
            ))}

            <h2>Not-Very-Effective against</h2>
            {typeData.damage_relations.half_damage_to?.map((type, i) => (
              <div key={i}>{type.name}</div>
            ))}

            <h2>Not-Effective against</h2>
            {typeData.damage_relations.no_damage_to?.map((type, i) => (
              <div key={i}>{type.name}</div>
            )) || "none"}
          </div>
          <div className="Defense">
            <h2>Weak to </h2>

            {typeData.damage_relations.double_damage_from?.map((type, i) => (
              <div key={i}>{type.name}</div>
            )) || "none"}
            <h2>Resist</h2>
            {typeData.damage_relations.half_damage_from?.map((type, i) => (
              <div key={i}>{type.name}</div>
            )) || "none"}
            <h2>Immune to</h2>
            {typeData.damage_relations.no_damage_from?.map((type, i) => (
              <div key={i}>{type.name}</div>
            )) || "none"}
          </div>
          <h2>Moves</h2>
          <div className="movesLearned">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Power</th>
                  <th>Accuracy</th>
                  <th>Type</th>
                  <th>Damage Class</th>
                  <th>PP</th>
                  <th>Learn Method</th>
                </tr>

                {sortedMoves?.moves.map((move) => (
                  <tr>
                    <Link to={`/moves/${move.name}`}>
                      <td>{move.name}</td>
                    </Link>
                    <td>{data.power}</td>
                    <td>{data.accuracy}</td>
                    <td className={move.data.type.name}>
                      {move.data.type.name}
                    </td>
                    <td>{move.data.damage_class.name}</td>
                    <td>{move.data.pp}</td>
                    <td>
                      {move.version_group_details[0].move_learn_method.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* {sortedMoves?.map((move, i) => (
            // <>
            //   <p key={i}>{move.name}</p>
            // </>
            console.log(move)
          ))} */}

          <h2>Pokemon</h2>
          <PokeSprites pokeSprite={pokeSprite}></PokeSprites>
        </main>
      </>
    );
  }
}

export default Type;
