import React from "react";
import { Link } from "react-router-dom";

function PokeSprites({pokeSprite ,valueSearch}) {
  if (pokeSprite) {
    return (
      <div className="pokemonIcons">
        {pokeSprite?.species.map((pokemon, i) => (
          <>
            <div
              onClick={() => valueSearch(pokemon.name)}
              key={pokemon.id}
              className="icon"
            >
              <Link className="iconSprite" to={`/`}>
                <img src={pokemon?.sprites?.front_default} />
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
    );
  }
}
export default PokeSprites;
