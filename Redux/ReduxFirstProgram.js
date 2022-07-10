import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Compo/Navbar';
import { createContext, useContext } from 'react';
import { StateContext } from '.';

function App() {
 /* const Astate=useContext(StateContext)
  //{console.log(Astate)}
  Astate.subscribe(()=>{

console.log(Astate.getState());


  });
  Astate.dispatch({type:"Good mrh",data:'miss sharma'})
 
  return (
    <div className="App">


    

<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>

</Routes>

</BrowserRouter>

    </div>
  );
  */
}

export default App;