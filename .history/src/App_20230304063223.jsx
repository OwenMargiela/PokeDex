import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SearchInput from "./Components/SearchInput/SearchInput";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Bulbasaur");

  function valueSearch(pokemon) {
    console.log("ran");
  }

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
              <Route path="/"></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
