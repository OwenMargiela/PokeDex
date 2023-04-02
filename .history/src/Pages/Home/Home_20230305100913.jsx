import React from 'react'
import Entry from '../../Components/Entry/Entry'
import SearchIcons from '../../Components/Search/SearchIcons'
import './Home.css'

function Home() {
  return (
    <>
    <main className='main' >
        <button>next</button>
        <button>prev</button>
        <div className="pokeIcons">
        <SearchIcons></SearchIcons>
        </div>
        <div className="entry">
            <Entry></Entry>

        </div>
        
    </main>
    </>
  )
}

export default Home