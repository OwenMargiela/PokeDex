import React from "react";

function BaseStats({item}) {
  return (
    <>
      <div className="baseStats">
        <table className="statsTable">
          <tbody>
            {item.item.map((stat, i) => (
              <tr key={i}>
                <td>{stat.stat.name}</td>
                <td>{stat.base_stat}</td>
                <td>
                  <div
                    class="bar-chart"
                    style={{
                      width: `${stat.base_stat * 1.5}` + "px",
                      height: 12 + "px",
                    }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
          <h2>
            Total :{" "}
            {item.item.reduce(
              (accumulator, currentValue) =>
                (accumulator += currentValue.base_stat),
              0
            )}
          </h2>
        </table>
      </div>
    </>
  );
}

export default BaseStats;
