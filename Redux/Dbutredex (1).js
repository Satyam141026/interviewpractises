import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';


function App(props) {
  let ChangeFriend=(e)=>{
    //alert("hello")
    props.a()
    
 
 
     }

  return (
    <div className="App">
      
      {props.mystore.Firstname}

      <button onClick={(e)=>{ChangeFriend(e)}}>Click me</button>


    </div>
  );
}
  
let mapStateToProps=(state)=>{
  return {
    mystore:state
  };
  
    }
    let mapDispatchtoProps=(dispatch)=>{
  
     return {
  a:function(){  dispatch({type:'abc',name:'satyam',sur:'jaya'})},
  b:()=>{ dispatch({type:'def',name:'neemach',sur:'sharma'})}
  
     };
    }



export default connect(mapStateToProps,mapDispatchtoProps)(App);