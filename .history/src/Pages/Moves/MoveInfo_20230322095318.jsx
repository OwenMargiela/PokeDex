import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoveInfo.css";
function MoveInfo() {
  const [moveData, SetMoveData] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function getMoveData() {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/move/${id}/`);
      SetMoveData(data);
    }
    getMoveData();
  }, []);
  
  if (moveData) {
    console.log(moveData);
    return (
      <>
        <h1>{id}</h1>
        <div className="mainPokedata">
          <h2>Move Data</h2>
          <div className="headElem">
            <table className="moveDataTable">
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>{moveData?.type.name}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{moveData.damage_class.name}</td>
                </tr>
                <tr>
                  <td>Power</td>
                  <td>{moveData.power}</td>
                </tr>
                <tr>
                  <td>Accuracy</td>
                  <td>{moveData.accuracy}</td>
                </tr>
                <tr>
                  <td>PP</td>
                  <td>{moveData.pp}</td>
                </tr>
                <tr>
                  <td>Introduced In</td>
                  <td>{moveData.generation.name}</td>
                </tr>
                <tr>
                  <td>Priority</td>
                  <td>{moveData.priority}</td>
                </tr>
              </tbody>
            </table>
            <div className="Effects">
              <div className="shortEffect">
                <h2>Effect</h2>
                <p>{moveData?.effect_entries[0].effect}</p>
              </div>
              <div className="longEffect">
                <h2>Short Effect</h2>
                <p>{moveData?.effect_entries[0].short_effect}</p>
              </div>
              <div className="target">
                <h2>Target</h2>
                <p>{moveData.target.name}</p>
              </div>
              <div className="contestType">
                <h2>Contest Type</h2>
                <p>{moveData.contest_type.name}</p>
              </div>
            </div>
          </div>
          <div className="flavorTextEntries">
            <h2>Flavor Text</h2>
            <p>Cuts using claws,scythes, etc.</p>
          </div>
          <div className="learnedBy">
            <h2>Learned By</h2>
          </div>
        </div>
      </>
    );
  }
}

export default MoveInfo;
