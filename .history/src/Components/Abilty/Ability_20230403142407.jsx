import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Ability({abilities}) {
//     abilities.map((ability,i) =>(
// console.log(ability.ability.name)
//     ))
  return (
    <>
      <div className="abilities">
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
      </div>
    </>
  );
}

export default Ability;
