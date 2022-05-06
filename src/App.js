//importing the img
import Albedo from "./GenshinImpactCharacterPortraits/Character-Albedo-.png"
import Amber from "./GenshinImpactCharacterPortraits/Character-Amber-.png"
import Ayaka from "./GenshinImpactCharacterPortraits/Character-Ayaka.png"
import Ayato from "./GenshinImpactCharacterPortraits/Character-Ayato.png"



import './App.css';
import React, { useState, useEffect } from "react";
import Infodisplay from './Infodisplay';
import Scoreboard from "./Scoreboard";
import Carddisplay from "./Carddisplay";


function App() {

  const [cards, setCards] = useState([
    {img: Albedo, clicked: false,},
    {img: Amber, clicked: false,},
    {img: Ayaka, clicked: false,},
    {img: Ayato, clicked: false,},
  ])

  useEffect(() => {
    // Do something
  }, []);

  const [score, setScore]= useState({
    currentScore: 0,
    highScore: 0,
  })
  
  return (

    <div className="App">
     <Infodisplay />
     <Scoreboard score={score} />
     <Carddisplay cards={cards} />
    </div>
  );
}

export default App;
