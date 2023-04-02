import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Location.css";
function Location() {
  const { id } = useParams();
  const [pokeSprite, SetPokeSprite] = useState();
  const [locationData, SetLocationData] = useState();

  useEffect(()=>{
    async function getLocations(){
        const {data} = await axios.get(`https://pokeapi.co/api/v2/location-area/${id}/`)
        SetLocationData(data)
        console.log(data)
    }
    // async function getSpriteAndNAme(res) {
    //     const requests = res.map((obj) => axios.get(obj.pokemon.url));
  
    //     Promise.all(requests)
    //       .then((responses) => {
    //         const data = responses.map((response) => response.data);
  
    //         SetPokeSprite((prevState) => ({
    //           ...prevState,
    //           species: data,
    //         }));
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    //   getSpriteAndNAme()
    getLocations()
    },[])
  return (
    <>
      <main className="pokedexData"></main>
      <h2>{id}</h2>

      <div className="encounterMethod">
        <h2>Encounter Method</h2>
        <p>Walking</p>
      </div>
      <div className="pokemon">
        <table>
          <tbody>
            <tr>
              <th>Pokemon</th>
              <th>Chance</th>
              <th>Max-level</th>
              <th>Min-level</th>
            </tr>
            <tr>
              <td>s</td>
              <td>s</td>
              <td>s</td>
              <td>s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Location;
