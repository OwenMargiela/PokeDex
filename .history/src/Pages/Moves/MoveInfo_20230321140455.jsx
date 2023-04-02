import React from "react";

function MoveInfo() {
  return (
    <>
      <h1>Cut</h1>
      <div className="moveData">
        <h2>Move Data</h2>
        <table>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>Physical</td>
            </tr>
            <tr>
              <td>Power</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Accuracy</td>
              <td>95</td>
            </tr>
            <tr>
              <td>PP</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Power</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>Damage class</td>
              <td>Physical</td>
            </tr>
            <tr>
              <td>Introduced In</td>
              <td>Generation-i</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Effects">
        <div className="shortEffect">
          <p>Inflicts regular damage</p>
        </div>
        <div className="longEffect">
          <p>Inflicts regular damage with no additional effect</p>
        </div>
      </div>
    </>
  );
}

export default MoveInfo;
