import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SearchInput from "./Components/SearchInput/SearchInput";
import Home from "./Pages/Home/Home";

function App() {
  const [pokeEntry, setPokeEntry] = useState({ entry: null, species: [] });
  const [value, setValue] = useState("Bulbasaur");

  async function valueSearch(pokemon) {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
    );

    setPokeEntry((prevState) => ({
      ...prevState,
      entry: data,
    }));
  }
  async function getPokemon() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=21`
    );
    getSpriteAndNAme(data.results);
    // setPokeEntry((prevState) => ({
    //   ...prevState,
    //   species: res.data,
    // }));
  }
  async function getSpriteAndNAme(res) {
    const requests = res.map((obj) => axios.get(obj.url));
    // console.log(requests);

    Promise.all(requests)
      .then((responses) => {
        // Log the responses once all the promises have been resolved
        responses.forEach((response) => {
          console.log(response.data);
        });
      })
      .catch((error) => {
        console.error(error);
      });

    // console.log("res is", res);
    // res.map(async (item, i) => {
    //   const { data } = await axios.get(item.url);
    // pokeEntry.species[i] = {
    //   sprite: data.sprites.front_default,
    //     name: data.name,
    //     types: data.types,
    // }
    // pokeEntry.species[i] = data
    // });
  }
  useEffect(() => {
    valueSearch(value);
    getPokemon();
  }, []);

  useEffect(() => {
    pokeEntry.entry ? console.log(pokeEntry) : null;
  }, [pokeEntry]);

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
              <Route
                path="/"
                element={<Home pokeEntry={pokeEntry}></Home>}
              ></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
