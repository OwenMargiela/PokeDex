import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Type.css";
function Type() {
  const { id } = useParams();
  const [typeData, SetTypeData] = useState();
  const [pokeSprite, SetPokeSprite] = useState();
  useEffect(() => {
    async function getTypeData() {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${id}/`);
      SetTypeData(data);
      getSpriteAndNAme(data.learned_by_pokemon);
    }

    async function getSpriteAndNAme(res) {
      const requests = res.map((obj) => axios.get(obj.url));

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
    getTypeData();
  }, []);
  if (typeData) {
    console.log(typeData);
  }
  return (
    <>
      <h2>{id}</h2>
      <main className="pokedexData">
        <h2>Introduced in</h2>
        <p>{typeData.generation.name}</p>
        <h2>Moves</h2>
        <p>Move</p>
        <h2>Pokemon</h2>
        <p>Pokemon</p>

        <div className="Attack">
          <h2>Super-Effective against</h2>

          {typeData.damage_relations.double_damage_to.map((type, i) => (
            <div key={i}>{type.name}</div>
          ))}

          <h2>Not-Very-Effective against</h2>
          {typeData.damage_relations.half_damage_to.map((type, i) => (
            <div key={i}>{type.name}</div>
          ))}

          <h2>Not-Effective against</h2>
          {typeData.damage_relations.no_damage_to?.map((type, i) => (
            <div key={i}>{type.name}</div>
          )) || 'none'}
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
