import logo from './logo.svg';
import './App.css';
import User2 from './User2';
import React ,{useRef} from 'react';
function App() {
  const reff=useRef(null);
  function Updatefun(){
reff.current.value="1000";
reff.current.style.backgroundColor="green"

  }
  return (
    <div className="App">

   <User2 ref={reff} />
   <button onClick={Updatefun}>update</button>
    </div>
  );
}

export default App;
