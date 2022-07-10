import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { createRef } from 'react';
class App extends Component {
  constructor(){
super();
this.InputRef=createRef();

  }
  componentDidMount(){
console.warn(this.InputRef.current.onkeydown)



  }

    
  getup1(){
    console.warn(this.InputRef.current.value)

    this.InputRef.current.style.color="red"
    this.InputRef.current.style.backgroundColor="green"

  }
  render(){
  return (
<>
   <h1>hello satyam</h1>
   <input type="text" ref={this.InputRef} /> 
   <button  onClick={()=>this.getup1()} >Primary</button>
   </>
  );

}}

export default App;
