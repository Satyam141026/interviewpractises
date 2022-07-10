import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rootReducer=(oldstate='Satyam',action)=>{


  let newstate=oldstate
  if(action.type==="Good mrh"){
newstate=action.data
return newstate 
  }
  return newstate
}
let store=createStore(rootReducer);
//console.log(store);
store.subscribe(()=>{
  //console.log("my data",store.getState())
})
store.dispatch({type:"Good mrh",data:'jaya'})
store.dispatch({type:"Good mrh",data:'jayahhhhhhhhhhhhhhh'})
export const StateContext=createContext()
root.render(
  <React.StrictMode>
    <StateContext.Provider value={store}>
    <App/>
    </StateContext.Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();