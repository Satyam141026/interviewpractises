import logo from './logo.svg';
import './App.css';
import React, { useRef }  from 'react';

function App() {
  const inputref=useRef(null);
  const inputref1=useRef(null);
  function setdata1(e){

  e.preventDefault();
  console.warn("filed1",inputref.current.value);
  console.warn("filed2",inputref1.current.value);
  const mydata=document.getElementById('T1').value
  console.warn("filed3",mydata);
  }
  return (
    <div className="App">
<form onSubmit={setdata1}>
<input text="text" ref={inputref} /><br/>
<input text="text" ref={inputref1}/>
<input text="text" id='T1'/>
<button>Submit</button>
</form>


    </div>
  );
}

export default App;
