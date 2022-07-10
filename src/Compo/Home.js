import { useNavigate } from "react-router-dom";
import React from "react";
function Homefunction () {

  function handleClick() {
    navigate("/about");
  }
  return (
    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  );
}
  export default Home;

 // npm i -D react-router-dom@latest