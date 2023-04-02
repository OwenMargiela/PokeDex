import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SearchInput from "./Components/SearchInput/SearchInput";
import Home from "./Pages/Home/Home";
import PokemonDetails from "./Pages/PokemonDetails/PokemonDetails";

function App() {
  const [pokeEntry, setPokeEntry] = useState({ entry: null, species: null });
  const [value, setValue] = useState("Charizard");
  const [pokedexText, setPokedexText] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  function pagination(url) {
    getPokemon(url);
  }

  async function valueSearch(pokemon) {
    setValue(pokemon);
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}/`
    );
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.toLowerCase()}`
    );
    setPokeEntry((prevState) => ({
      ...prevState,
      entry: data,
    }));

    setPokedexText(res.data);

  }
  

  async function getPokemon(paginate) {
    const { data } = await axios.get(
      paginate || `https://pokeapi.co/api/v2/pokemon?offset=0&limit=21`
    );
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    getSpriteAndNAme(data.results);

  }
  async function getSpriteAndNAme(res) {
    const requests = res.map((obj) => axios.get(obj.url));

    Promise.all(requests)
      .then((responses) => {
        const data = responses.map((response) => response.data);
        setPokeEntry((prevState) => ({
          ...prevState,
          species: data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });


  }
  useEffect(() => {
    valueSearch(value);
    getPokemon();
  }, []);

 

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
                element={
                  <Home
                    nextUrl={nextUrl}
                    prevUrl={prevUrl}
                    pagination={pagination}
                    valueSearch={valueSearch}
                    pokeEntry={pokeEntry}
                    pokedexText ={pokedexText}
                  ></Home>
                }
              ></Route>
              <Route
              path="pokemon/:id"
              element={<PokemonDetails
                pokeEntry={pokeEntry}
                pokedexText ={pokedexText}
              ></PokemonDetails>}
              >  
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
