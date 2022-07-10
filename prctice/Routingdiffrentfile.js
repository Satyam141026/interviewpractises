import "./App.css";
import React from "react";
import { Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Compo/Home";
import About from "./Compo/About";
import Page from "./Compo/Page";
import Nav from "./Compo/Nav";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
