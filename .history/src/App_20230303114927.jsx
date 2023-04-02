import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>

      
    
    </div>
  )
}

export default App
