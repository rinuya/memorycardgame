import React, { useState } from "react";

const Scoreboard = (props) => {

    //state code and functions

    return (
        //Code in here
        <div className="score">
            <h3>Highscore: {props.score.highScore}</h3>
            <h3>Current score: {props.score.currentScore}</h3>
        </div>
    )
}

export default Scoreboard;