import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SearchInput from "./Components/SearchInput/SearchInput";
import Home from "./Pages/Home/Home";

function App() {
  const [pokeEntry, setPokeEntry] = useState(null);
  const [value, setValue] = useState("Bulbasaur");

  async function valueSearch(pokemon) {
    // const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
    // setPokeEntry(data)
    console.log(pokemon.toLowerCase())
  }
  pokeEntry? console.log(pokeEntry) : null

  return (
    <div className="App">
      <div className="column">
        <div className="row">
          <Navbar></Navbar>
          <SearchInput
            valueSearch={valueSearch}
            value={value}
            setValue={setValue}
          ></SearchInput>
          <Router>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
