import React from "react";

function Ability({abilities}) {
    abilities.map(abilitiy =>(
console.log(abilitiy.ability.name)
    ))
  return (
    <>
      {/* <div className="abilities">
        <h2>Abilities</h2>
        {abilities.map((ability, i) => (
          <Link to={`/abilities/${ability.ability.name}`}>
            <li className="abilityItem" key={i}>
              {ability.ability.name.toUpperCase()}
              <FontAwesomeIcon
                className="faIcon"
                icon="fa-solid fa-circle-info"
              />
            </li>
          </Link>
        ))}
      </div> */}
    </>
  );
}

export default Ability;
