import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { StateContext } from '.';
import { act } from 'react-dom/test-utils';

function App(props) {
 let ChangeFriend=(e)=>{
//alert("hello")
props.b('Good','jaya kanno')
props.a()
 }

  return (
    <div className="App">

{props.mystore}
    
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
a:function(){  dispatch({type:'Good',data:'satyam'})},
//b:()=>{ dispatch({type:'Good',data:'neemach'})}
b:(action,data)=>{ dispatch({type:action,data:data})}
   };
  }
  


export default connect(mapStateToProps,mapDispatchtoProps)(App);