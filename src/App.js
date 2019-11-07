import React from "react";
import NasaContainer from "./components/NasaContainer";
import "./App.css";

function App() {


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div className="container">
      	<NasaContainer/>
      </div>
    </div>
  );
}

export default App;
