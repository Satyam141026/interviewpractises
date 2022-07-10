import logo from './logo.svg';
import './App.css';
import { useState ,use, useEffect } from "react";
function App() {
  const [data1,setData]=useState(1);
  const [data2,putData]=useState(100);
  useEffect( ()=>

{ alert("get");   } ,[data1]
  );
  return (
    <div className="App">
<h1>  {data1}   </h1><br></br>
<h1>   {data2}  </h1><br></br>

<button onClick={()=>setData(data1+1)} >Get DAta</button><br></br>

<button onClick={()=>putData(data2+1)} >put DAta</button><br></br>

    </div>
  );
}

export default App;
