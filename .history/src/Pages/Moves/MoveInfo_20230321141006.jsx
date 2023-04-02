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
            <tr>
              <td>Priority</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Effects">
        <div className="shortEffect">
            <h2>Short Effect</h2>
          <p>Inflicts regular damage</p>
        </div>
        <div className="longEffect">
            <h2>Long Effect</h2>
          <p>Inflicts regular damage with no additional effect</p>
        </div>
        <div className="target">
            <h2>Target</h2>
            <p>Selected-Pokemon</p>
        </div>
        <div className="contestType">
            <h2>Contest Type</h2>
            <p>Cool</p>
        </div>
        <div className="flavorTextEntries">
            <h2>Cuts using claws,scythes, etc.</h2>
            <p></p>
        </div>
        <div className="learnedBy">
            <h2>Learned By</h2>

        </div>

      </div>

    </>
  );
}

export default MoveInfo;
