import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SearchInput from "./Components/SearchInput/SearchInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="column">
        <div className="row">
          <Navbar></Navbar>
          <SearchInput></SearchInput>
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
