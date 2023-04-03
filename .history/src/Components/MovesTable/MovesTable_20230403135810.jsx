import React from 'react'
import { Link } from 'react-router-dom'

function MovesTable({sortedMoves}) {
  return (
    <>
    <h2>Moves</h2>
          <div className="movesLearned">
            <table className="center">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Power</th>
                  <th>Accuracy</th>
                  <th>Type</th>
                  <th>Damage Class</th>
                  <th>PP</th>
                  <th>Genration</th>
                </tr>

                {sortedMoves?.map((move) => (
                  <>
                    <tr>
                      <Link to={`/moves/${move.name}`}>
                        <td>{move.name}</td>
                      </Link>
                      <td>{move.power}</td>
                      <td>{move.accuracy}</td>
                      <td className={move.type.name}>{move.type.name}</td>
                      <td>{move.damage_class.name}</td>
                      <td>{move.pp}</td>
                      <td>{move.generation.name}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
    </>
  )
}

export default MovesTable