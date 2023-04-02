import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokeSprites from "../../Components/PokeSprites";
import "./Type.css";
function Type() {
  const { id } = useParams();
  const [typeData, SetTypeData] = useState();
  const [pokeSprite, SetPokeSprite] = useState();
  useEffect(() => {
    async function getTypeData() {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${id}/`);
      SetTypeData(data);
      getSpriteAndNAme(data.pokemon);
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
    getTypeData();
  }, []);
  if (typeData) {
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
          <p>Move</p>
          <h2>Pokemon</h2>
          <PokeSprites
          pokeSprite={pokeSprite}
          ></PokeSprites>
          {/* <div className="pokemonIcons">

            {pokeSprite?.species.map((pokemon, i) => (
             
              <>
                <div
                  onClick={() => valueSearch(pokemon.name)}
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
          </div> */}
        </main>
      </>
    );
  }
}

export default Type;
