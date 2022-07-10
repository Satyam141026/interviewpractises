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
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/about/:id" element={<About />} />
        </Route>
        <Route path="/" element={<Nav />}>
          <Route exact path="/admin" element={<Home />} />
          <Route path="/admin/about/" element={<About />} />
          <Route path="/admin/about/:id" element={<About />} />
        </Route>
        
        
        <Route exact path="*" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
