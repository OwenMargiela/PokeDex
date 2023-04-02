import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { boxArt } from "../../GameBoxArt";
import './Generation.css'

function Generation() {
  const { id } = useParams();
  const [regionData, setRegionData] = useState();

  async function getRegionData() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/generation/${id}`
    );
    setRegionData(data);
    console.log(data);
  }
  useEffect(() => {
    getRegionData();
  }, []);
  if (regionData) {
    console.log(regionData)
    return (
      <>
        <h2>{regionData?.main_region.name}</h2>
        <h2>{regionData?.version_groups[0].name}</h2>
        {regionData?.types.map((type, i) => (
          <p key={i}>{type.name} </p>
        ))}
        {boxArt
          .filter((art) => art.region === regionData?.main_region.name)
          .map((boxArt) => (
            <img className="boxArt" src={boxArt.path} alt="" srcset="" />
          ))}
           <div className="pokemonIcons">
            {regionData.pokemon_species?.map((pokemon, i) => (
              // <div className="Sprite" key={i}>
              //   <img src={pokemon.sprites.front_default} alt="" />
              //   <p>{pokemon.name}</p>
              // </div>
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
          </div>
          
      </>
    );
  }
}

export default Generation;
