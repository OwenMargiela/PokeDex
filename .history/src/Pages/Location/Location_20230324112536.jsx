import React from 'react'
import { useParams } from 'react-router-dom'
import './Location.css'
function Location() {
    const {id} = useParams()
  return (
    <>
    <main className="pokedexData"></main>
    <h2>{id}</h2>

    <div className="encounterMethod">
        <h2>Encounter Method</h2>
        <p>Walking</p>
    </div>
    <div className="pokemon">
        <table>
            <tbody>
                <tr>
                    <th>Pokemon</th>
                    <th>Chance</th>
                    <th>Max-level</th>
                    <th>Min-level</th>
                </tr>
                <tr>
                    <td>s</td>
                    <td>s</td>
                    <td>s</td>
                    <td>s</td>
                    
                </tr>
            </tbody>
        </table>
    </div>

    </>
  )
}

export default Location