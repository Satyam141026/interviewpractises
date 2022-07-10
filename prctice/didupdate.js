import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React, { Component } from "react";
//import User from './Compo/User';
//import Inputs1 from './Inputs1';
//import Condistion from './Compo/Condistion';
//import { useState } from 'react';
//import ProsFunction from './Compo/ProsFunction';
//import Member from './Compo/Member';
//import Lifecycle1 from './Compo/Lifecycle1';
//import Renders from './Compo/Renders';
//import Didmount from './Didmount';

/*
function App() {
  function getData(){


alert("hello data sharma here of the color of the sie is the of the colo r of the ")

  }
  return (
    <div className="App">
   <h1></h1>


    </div>
  );
}
*/

export default class App extends Component {
  constructor() {
   super();
this.state={
  name:"Satyam sharma",
  count:0
}




    console.warn("constructor");
 
    }
  
componentDidMount(){

console.warn("Didmount")
}
componentDidUpdate(prepros,prestate,snapeshot){

  console.warn("Update",prestate.count,this.state.count)
  if(prestate.count===this.state.count)
  {
alert("not defind");

  }
  }
  render() {
    console.warn("render")
    return (
      <div className='App'>
       
        <h1>Componentdid mount{this.state.count}</h1>
        <button onClick={()=>this.setState({count:1})}>update</button>

         </div>
        
        );


  
  }
    
}


