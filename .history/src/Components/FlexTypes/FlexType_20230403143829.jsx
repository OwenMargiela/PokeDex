import React from "react";
import { Link } from "react-router-dom";

function FlexType({item}) {
    
  return (
    <>
      <div className="types">
        <ul className="flexTypes">
          {item.map((type, i) => (
            <li className="type" key={i}>
              <Link to={`/type/${type.type.name}`}>
                <div className={`${type.type.name}`}>{type.type.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FlexType;
