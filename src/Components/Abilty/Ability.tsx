import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";

type AbilityProps = {
  abilities: Abilitiy & [];
};
type Abilitiy = {
  ability: {};
  is_hidden: boolean;
  slot: number;
};

type ability = {
  name: string;
  url: string;
};


function Ability({ abilities }: AbilityProps) {
  console.log(abilities);
  return (
    <>
      <div className="abilities">
        <h2>Abilities</h2>
        {abilities.map(
          (
            ability: {
              ability: ability;
            },
            i
          ) => (
            <Link key={i} to={`/abilities/${ability.ability.name}`}>
              <li className="abilityItem" key={i + 1}>
                {ability.ability.name.toUpperCase()}
                <FontAwesomeIcon
                  className="faIcon"
                  icon={["fas", "circle-info"]}
                />
              </li>
            </Link>
          )
        )}
      </div>
    </>
  );
}

export default Ability;
