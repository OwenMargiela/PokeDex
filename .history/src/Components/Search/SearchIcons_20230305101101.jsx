import React from "react";
import './SearchIcons.css'

function SearchIcons() {
  return (
    <>
    <div className="prevAndNext" >
    <button>next</button>
        <button>prev</button>
    </div>
      <div className="pokemonIcons ">
        {/* {loading
          ? spriteAndName.map((entry) => (
              <div className="icon">
                <Loading></Loading>
              </div>
            ))
          : spriteAndName.map((entry) => (
              <div
                onClick={() => valueSearch(entry.name)}
                key={entry.id}
                className="icon"
              >
                <img className="iconSprite" src={entry.sprite} />
                <p className="iconName">{entry.name}</p>
                <div className="typeContainer">
                  <p className={entry.types[0].type.name}>
                    {entry.types[0].type.name}
                  </p>

                  {entry.types[1]?.type.name && (
                    <p className={entry.types[1].type.name}>
                      {entry.types[1]?.type.name}
                    </p>
                  )}
                </div>
              </div>
            ))} */}
        <div className="icon">
          <img className="iconSprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <p className="iconName">ditto</p>
          <div className="typeContainer">
            <p className='water'>
              water
            </p>
          </div>
        </div>
        <div className="icon">
          <img className="iconSprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <p className="iconName">ditto</p>
          <div className="typeContainer">
            <p className='water'>
              water
            </p>
          </div>
        </div>
        <div className="icon">
          <img className="iconSprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <p className="iconName">ditto</p>
          <div className="typeContainer">
            <p className='water'>
              water
            </p>
          </div>
        </div>
        <div className="icon">
          <img className="iconSprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <p className="iconName">ditto</p>
          <div className="typeContainer">
            <p className='water'>
              water
            </p>
          </div>
        </div>
        <div className="icon">
          <img className="iconSprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <p className="iconName">ditto</p>
          <div className="typeContainer">
            <p className='water'>
              water
            </p>
          </div>
        </div>
        <div className="icon">
          <img className="iconSprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <p className="iconName">ditto</p>
          <div className="typeContainer">
            <p className='water'>
              water
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchIcons;
