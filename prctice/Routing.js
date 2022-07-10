import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Hello home</h1>
    </div>
  );
}
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/users  ">Users</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
export default App;
