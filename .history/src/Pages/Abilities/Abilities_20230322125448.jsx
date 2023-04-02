import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Abilities.css";
function Abilities() {
  const { id } = useParams();
  const [abilities, SetAbilities] = useState();
  useEffect(() => {
    async function getAbilityData() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/ability/${id}/`
      );
      console.log(data);
      //   getSpriteAndNAme(data.learned_by_pokemon);
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
    getAbilityData();
  }, []);
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
        <div className="pokemonWith">
          <h2>Pokemon with Moxie</h2>
        </div>
      </main>
    </>
  );
}

export default Abilities;
