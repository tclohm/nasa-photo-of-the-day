import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NasaContainer from "./components/NasaContainer";
import NasaNavBar from "./components/NasaNavBar";
import "./App.css";

function App() {

  return (
    <div className="App">
      <NasaNavBar/>
      <div className="container">
      	<NasaContainer/>
      </div>
    </div>
  );
}

export default App;
