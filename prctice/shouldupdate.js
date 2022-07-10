import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React, { Component } from "react";


export default class App extends Component {
  constructor() {
   super();
this.state={
  name:"Satyam sharma",
  count:0
}




    console.warn("constructor");
 
    }
    shouldComponentUpdate(){

if(this.state.count>5 && this.state.count<10){
return(true);
    }
  
  }
  render() {
    console.warn("render")
    return (
      <div className='App'>
       
        <h1>Componentdid mount{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>

         </div>
        
        );


  
  }
    
}


