import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Ability({ abilities }) {
    
  return (
    <>
      <div className="abilities">
        <h2>Abilities</h2>
        {abilities.map((ability, i) => (
          <Link key={i} to={`/abilities/${ability.ability.name}`}>
            <li className="abilityItem" key={i + 1}>
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
