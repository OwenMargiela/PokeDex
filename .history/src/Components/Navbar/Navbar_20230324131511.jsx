import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className="nav_container">
        <nav className="navigationBar">
          <ul className="navigationList" >
            <li className="listItem selectedHoverEffect">
                Pokedex
            </li>
           
            <li className="listItem selectedHoverEffect">
                Generation
            </li>
            
            
            
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar