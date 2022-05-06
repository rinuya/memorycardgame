import React, { useState } from "react";
import Card from "./Card";


const Carddisplay = (props) => {

    //cards = array of objects
    const cards= props.cards;
    const onclick = props.onclick;

    return (
        //Code in here
        <div className="carddisplay">
            {cards.map(card=>{
                return <Card img={card.img} onclick={onclick} />
            })}
            
        </div>
        
    )
}

export default Carddisplay;