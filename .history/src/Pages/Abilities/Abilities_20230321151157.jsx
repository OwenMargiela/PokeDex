import React from 'react'
import './Abilities.css'
function Abilities() {
  return (
    <>
    <h1>Moxie</h1>
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

    </main>
    </>
  )
}

export default Abilities