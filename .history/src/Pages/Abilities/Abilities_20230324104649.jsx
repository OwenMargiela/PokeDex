import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokeSprites from "../../Components/PokeSprites";
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
    getAbilityData();
  }, []);

  if (abilities) {
    const englishEntry = abilities.flavor_text_entries.filter(
      (entry) => entry.language.name === "en"
    );
    const flavorText = new Set();
    for (let i = 0; i < englishEntry.length; i++) {
      if (flavorText.has(englishEntry[i].flavor_text)) {
        continue;
      } else {
        flavorText.add(englishEntry[i].flavor_text);
      }
    }
    const finalFlavorTextArray = Array.from(flavorText);
    return (
      <>
        <h1>{id}</h1>
        <main className="mainPokedata">
          <div className="effect">
            <h2>Effect</h2>
            <p>
              {
                abilities.effect_entries.filter(
                  (entry) => entry.language.name === "en"
                )[0].effect
              }
            </p>
          </div>
          <div className="shortEffect">
            <h2>Short Effect</h2>
            <p>
              {
                abilities.effect_entries.filter(
                  (entry) => entry.language.name === "en"
                )[0].short_effect
              }
            </p>
          </div>
          <div className="flavorTextEntries">
            <h2>Flavor Text</h2>
            {finalFlavorTextArray.map((text, i) => (
              <div className="pokeEntry" key={i}>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <h2>Introduced in </h2>
          <p>Generation - v </p>
          <PokeSprites
          pokeSprite={pokeSprite}
          valueSearch={valueSearch}
          ></PokeSprites>
        </main>
      </>
    );
  }
}
export default Abilities;
