import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import NasaContainer from "./components/NasaContainer";
import NasaNavBar from "./components/NasaNavBar";
import "./App.css";


function App() {

  const dateString = new Date().toISOString().slice(0,10);
  const yearAndMonth = dateString.slice(0, 8);
  const day = dateString.slice(9,10);
  const dayNumber = Number(day)-1;
  const andDay = (dayNumber > 10 ? String(dayNumber) : "0" + String(dayNumber));
  let YYYYMMDD = yearAndMonth + andDay;

  function getRandomDate() {
    const year = Math.floor(Math.random() * (Math.floor(2018) - Math.ceil(1995)) + Math.ceil(1995));
    const month = Math.floor(Math.random() * (Math.floor(12) - Math.ceil(1)) + Math.ceil(1));
    const day = Math.floor(Math.random() * (Math.floor(28) - Math.ceil(6)) + Math.ceil(6));
    const yStr = String(year);
    let mStr = String(month);
    let dStr = String(day)
    const mnthStr = (month < 10 ? "0"+mStr : mStr);
    const dayStr = (day < 10 ? "0"+dStr : dStr);
    console.log(`${yStr}-${mnthStr}-${dayStr}`);
    setDate(`${yStr}-${mnthStr}-${dayStr}`);
    return;
  }

  const [data, setData] = useState([]);
  const [date, setDate] = useState(YYYYMMDD);



  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ybkme2hwBe0bqj1QCptMDu4JeDP2UjeCj7xkfDjc&date=${date}`)
    .then(response => {
      setData(response.data);
      console.log(response.data); 
    })
    .catch(error => {
      console.log("error", error);
    })
  }, [date]);


  return (
    <div className="App">
      <NasaNavBar date={date} getRandomDate={getRandomDate}/>
      <div className="container">
        <NasaContainer explanation={data.explanation} title={data.title} url={data.url}/>
      </div>
    </div>
  );
}

export default App;
