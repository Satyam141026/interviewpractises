import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rootReducer=(oldstate="Satyam",action)=>{
let newState=oldstate
if(action.type==='Good'){


newState=action.data
}
return newState

}

let store=createStore(rootReducer)

store.subscribe(()=>{
  console.log(store.getState());
})
//store.dispatch({type:"Good",data:"satyamJaya"})
//store.dispatch({type:"Good",data:"Jaya"})
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App/>

    </Provider>
  </React.StrictMode>
);


reportWebVitals();