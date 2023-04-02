import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeSprites from "../../Components/PokeSprites";
import "./Location.css";
function Location() {
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
    console.log(locationData[1].version_details[0].encounter_details[locationData[1].version_details[0].encounter_details.length-1])
    return (
      <>
        <main className=""></main>
        <h2>{id}</h2>

        <div className="encounterMethod">
          <h2>Encounter Method</h2>
          <p>Walking</p>
        </div>
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
                  <td>
                    <img
                      src={encounter.sprites.front_default}
                      alt=""
                      srcset=""
                    />
                  </td>
                  <td>{locationData[i].version_details[0].encounter_details[locationData[i].version_details[0].encounter_details.length-1].chance}</td>
                  <td>{locationData[i].version_details[0].encounter_details[locationData[i].version_details[0].encounter_details.length-1].max_level}</td>
                  <td>{locationData[i].version_details[0].encounter_details[locationData[i].version_details[0].encounter_details.length-1].min_level}</td>
                  
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
