
import './App.css';
import React from 'react'
import { BrowserRouter , Router, Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
              <BrowserRouter>
              <Link to="/" >Home</Link>
        <br></br>
        <Link to="/about" >About</Link>
        <br></br>
        <Link to="/pagenotdefind" >PagenotDefind</Link>
      <Routes>
      
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/about"  element={<About />} />
        <Route exact path="*"  element={< Page />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my Home Page</p>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About Page</p>
    </div>
  )
}
function Page() {
  return (
    <div>
      <h1>404  Page</h1>
      <p>PagenotDefind</p>
    </div>
  )
}
export default App;