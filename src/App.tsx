import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Instructions from "./views/Instructions";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="instructions" element={<Instructions />} />
      </Routes>
    </div>
  );
}

export default App;
