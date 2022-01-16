import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Chamith Wijesooriya");

  const clickMe = () => {
    setName("CEO of CWx Group");
  };

  return (
    <div className="App">
      <h1>Name = {name} </h1>
      <button type="button" onClick={clickMe}>
        Click Me
      </button>
    </div>
  );
}

export default App;
