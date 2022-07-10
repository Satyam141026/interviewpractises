import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";
function App() {
  
  return (
    <div className="App">
      <h1>hello satyam</h1>
   <Hoc ab={Counter} />
   <HocRed ab={Counter} />
   <HocBlack ab={Counter} />
   <HocPink ab={Counter} />
    </div>
  );
} function Hoc(props){

return <h1 style={{backgroundColor:'green',height:'100px',width:"100px" }}><props.ab/></h1>



}
function HocRed(props){

  return <h1 style={{backgroundColor:'red',height:'100px',width:"100px" }}><props.ab/></h1>
  
  
  
  }
  function HocBlack(props){

    return <h1 style={{backgroundColor:'green',height:'100px',width:"100px" }}><props.ab/></h1>
    
    
    
    }
    function HocPink(props){

      return <h1 style={{backgroundColor:'green',height:'100px',width:"100px" }}><props.ab/></h1>
      
      
      
      }
      
    

function Counter() {
  const [data, setData1] = useState(0)
  return (
    <div className="app">
      <h1>{data} </h1>
      <button onClick={() =>setData1(data + 1)}>Count</button>
    </div>
  );
}

export default App;
