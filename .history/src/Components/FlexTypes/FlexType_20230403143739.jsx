import React from "react";
import { Link } from "react-router-dom";

function FlexType({item}) {
    console.log(item)
  return (
    <>
      {/* <div className="types">
        <ul className="flexTypes">
          {item.types.map((type, i) => (
            <li className="type" key={i}>
              <Link to={`/type/${type.type.name}`}>
                <div className={`${type.type.name}`}>{type.type.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default FlexType;
