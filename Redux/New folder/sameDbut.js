/*import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rootReducer=(oldState={fullname:'ram'},action)=>{
  let newstate=oldState;
  switch (action.type) {
    case 'abc':
       newstate.fullname=action.name + '' +action.sur
      break;
      case 'def':
        newstate.fullname=action.name + '' +action.sur
       break;
    default:
      break;
  }
return newstate
}

let store=createStore(rootReducer)

console.log(store);
store.subscribe(()=>{
console.log(store.getState());


})
console.log(store.getState());

store.dispatch({type:'abc',name:'satyam sharma',sur:'sjarmajaya'})
//store.dispatch({type:"Good",data:"satyamJaya"})
//store.dispatch({type:"Good",data:"Jaya"})
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App/>

    </Provider>
  </React.StrictMode>
);



reportWebVitals();*/
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rootReducer=(oldstate={Firstname:'ram'},action)=>{
let newState=oldstate
switch (action.type) {
  case 'abc':

    newState.Firstname=action.name +'' +action.sur;
    return newState
    break;
    case 'def':
      newState.Firstname=action.name +'  ' +action.sur;
      return newState
      break;
  default:
    return newState           

}


}

let store=createStore(rootReducer)

store.subscribe(()=>{
  console.log(store.getState());
})
//console.log(store.getState())
store.dispatch({type:'abc',name:'satyam',sur:'sharma'})
//store.dispatch({type:"Good",data:"Jaya"})
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App/>

    </Provider>
  </React.StrictMode>
);


reportWebVitals();