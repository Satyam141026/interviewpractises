import logo from './logo.svg';
import './App.css';
import { useState,useMemo } from 'react';
function App() {
  const[data1,setData]=useState(0);
  const[data2,setData1]=useState(0);
 var Multicount=useMemo( function Multicount(){


  console.warn("multycount")
  return data1*10
},[data1]);
  return (
    <div className="App">
   <h1>{Multicount}</h1>


   <button onClick={()=>setData(data1+1)}>{data1}\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</button><br></br>
   <button onClick={()=>setData1(data2+1)}>{data2}/////////////////////////////////////</button><br></br>
    </div>
  );
}

export default App;
