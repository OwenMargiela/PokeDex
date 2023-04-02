import React from 'react'
import { useParams } from 'react-router-dom'
import './Abilities.css'
function Abilities() {
    const {id} =useParams()
  return (
    <>
    <h1>{id}</h1>
    <main className='mainPokedata'>
        <div className="effect">
            <h2>Effect</h2>
            <p>This Pokémon cannot be paralyzed.\n\nIf a Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.</p>
        </div>
        <div className="shortEffect">
            <h2>Short Effect</h2>
            <p>
            Prevents paralysis
            </p>
        </div>
        <div className="flavorText">
            <h2>Flavour Text</h2>
            <p>Prevents paralysis.</p>
        </div>
        <h2>Introduced in </h2>
        <p>Generation - v </p>
        <div className="pokemonWith">
            <h2>Pokemon with Moxie</h2>
            
        </div>
    </main>
    </>
  )
}

export default Abilities