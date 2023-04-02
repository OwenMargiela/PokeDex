import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Abilities.css";
function Abilities({ valueSearch }) {
  const { id } = useParams();
  const [abilities, SetAbilities] = useState();
  const [pokeSprite, SetPokeSprite] = useState();
  useEffect(() => {
    async function getAbilityData() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/ability/${id}/`
      );
      SetAbilities(data);
      getSpriteAndNAme(data.pokemon);
      //   getSpriteAndNAme(data.learned_by_pokemon);
    }

    async function getSpriteAndNAme(res) {
      console.log(res);
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
    getAbilityData();
  }, []);
  //   console.log(abilities)
  return (
    <>
      <h1>{id}</h1>
      <main className="mainPokedata">
        <div className="effect">
          <h2>Effect</h2>
          <p>
            This Pokémon cannot be paralyzed.\n\nIf a Pokémon is paralyzed and
            acquires this ability, its paralysis is healed; this includes when
            regaining a lost ability upon leaving battle.
          </p>
        </div>
        <div className="shortEffect">
          <h2>Short Effect</h2>
          <p>Prevents paralysis</p>
        </div>
        <div className="flavorText">
          <h2>Flavour Text</h2>
          <p>Prevents paralysis.</p>
        </div>
        <h2>Introduced in </h2>
        <p>Generation - v </p>
        <div className="pokemonIcons">
          {pokeSprite?.species.map((pokemon, i) => (
            // <div className="Sprite" key={i}>
            //   <img src={pokemon.sprites.front_default} alt="" />
            //   <p>{pokemon.name}</p>
            // </div>
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

export default Abilities;
