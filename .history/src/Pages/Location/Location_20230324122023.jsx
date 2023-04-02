import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokeSprites from "../../Components/PokeSprites";
import "./Location.css";
function Location({ valueSearch }) {
  const { id } = useParams();
  const [pokeSprite, SetPokeSprite] = useState();
  const [locationData, SetLocationData] = useState();

  useEffect(() => {
    async function getLocations() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/location-area/${id}/`
      );
      SetLocationData(data.pokemon_encounters);
      //   console.log(data)

      getSpriteAndNAme(data.pokemon_encounters);
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
    //   getSpriteAndNAme()
    getLocations();
  }, []);
  if (locationData && pokeSprite) {
    return (
      <>
        <main className="pokedexData"></main>
        <h2>{id}</h2>

        <div className="pokemon">
          <table className="locationTable">
            <tbody>
              <tr>
                <th>Pokemon</th>
                <th>Chance</th>
                <th>Max-level</th>
                <th>Min-level</th>
              </tr>
              {pokeSprite.species.map((encounter, i) => (
                <tr>
                  <td onClick={() => valueSearch(pokemon.name)}>
                    <Link to={'/'}>
                      <img
                        src={encounter.sprites.front_default}
                        alt=""
                        srcset=""
                      />
                    </Link>
                  </td>
                  <td>
                    {
                      locationData[i].version_details[0].encounter_details[
                        locationData[i].version_details[0].encounter_details
                          .length - 1
                      ].chance
                    }
                  </td>
                  <td>
                    {
                      locationData[i].version_details[0].encounter_details[
                        locationData[i].version_details[0].encounter_details
                          .length - 1
                      ].max_level
                    }
                  </td>
                  <td>
                    {
                      locationData[i].version_details[0].encounter_details[
                        locationData[i].version_details[0].encounter_details
                          .length - 1
                      ].min_level
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Location;
