//importing the img
import Albedo from "./GenshinImpactCharactersPortraits/Character-Albedo-.png"
import Amber from "./GenshinImpactCharactersPortraits/Character-Amber-.png"
import Ayaka from "./GenshinImpactCharactersPortraits/Character-Ayaka.png"
import Ayato from "./GenshinImpactCharactersPortraits/Character-Ayato.png"
import Keqing from "./GenshinImpactCharactersPortraits/Character-Keqing-.png"
import Zhongli from "./GenshinImpactCharactersPortraits/Character-Zhongli-.png"
import Venti from "./GenshinImpactCharactersPortraits/Character-Venti-.png"
import Xiangling from "./GenshinImpactCharactersPortraits/Character-Xiangling-.png"
import Shenhe from "./GenshinImpactCharactersPortraits/Character-Shenhe.png"
import Raiden from "./GenshinImpactCharactersPortraits/Characters-Raiden-Shogun.png"
import Mona from "./GenshinImpactCharactersPortraits/Character-Mona-.png"
import Lisa from "./GenshinImpactCharactersPortraits/Character-Lisa-.png"




import './App.css';
import React, { useState, useEffect } from "react";
import Infodisplay from './Infodisplay';
import Scoreboard from "./Scoreboard";
import Carddisplay from "./Carddisplay";


function App() {
  //Helper function shuffle
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }


  const [cards, setCards] = useState([
    {img: Albedo, clicked: false,},
    {img: Amber, clicked: false,},
    {img: Ayaka, clicked: false,},
    {img: Ayato, clicked: false,},
    {img: Keqing, clicked: false,},
    {img: Zhongli, clicked: false,},
    {img: Venti, clicked: false,},
    {img: Xiangling, clicked: false,},
    {img: Shenhe, clicked: false,},
    {img: Raiden, clicked: false,},
    {img: Mona, clicked: false,},
    {img: Lisa, clicked: false,},
  ])

  useEffect(() => {
    // Do something
  }, []);

  const [score, setScore]= useState({
    currentScore: 0,
    highScore: 0,
  })

  const onclick = (_img) => {
    let el = cards.find(card=> card.img===_img);
    //If clicked, game over, else, return new array with object status clicked updated
    if (el.clicked){
      alert("Game over!");
      setCards(()=>{
        return cards.map((card)=>{
          return {...card, clicked: false}
        })
      });
      
      if (score.currentScore>score.highScore){
        setScore({highScore: score.currentScore, currentScore: 0})
      }
      else{
        setScore({...score, currentScore: 0});
      }
      
    }
    else {
      setCards(()=>{
        return cards.map((card) => {
          if (card.img === _img){
            return {...card, clicked: true}
          }
          else {
            return card
          }
        })
      })
      shuffle(cards);

      setScore({...score, currentScore: score.currentScore+1});
      
    }
    console.log(el)
  }
  shuffle(cards);
  
  return (

    <div className="App">
     <Infodisplay />
     <Scoreboard score={score} />
     <Carddisplay cards={cards} onclick={onclick} />
    </div>
  );
}

export default App;
