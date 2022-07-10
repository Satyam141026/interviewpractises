import logo from './logo.svg';
import './App.css';
import React ,{useRef} from 'react';
function App() {

const inputRef=useRef(null);

function Handleinput(){

console.warn("call");

//inputRef.current.value="1000";
//inputRef.current.value.focus();
inputRef.current.style.display="none"
}

  return (
    <div className="App">
   <h1>hello satyam</h1>
 
   <input type="text"  ref={inputRef}/>
  < button    onClick={Handleinput}>Handleinput</button>

    </div>
  );
}

export default App;
