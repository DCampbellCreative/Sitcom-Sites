import React, { useState, useEffect } from "react";
import { Place } from "./components/Place/Place";
import { Navbar } from "./components/Navbar/Navbar";
import { Shows } from "./components/Shows/Shows";
import { Character } from "./components/Character/Character";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://secret-bastion-23687.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shows shows={shows} />} />
          <Route path=":placeId" element={<Place />} />
          {/* <Route path=":characterId" element={<Character />} /> */}
          {/* <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
