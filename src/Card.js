import React, { useState } from "react";

const Card = (props) => {
    const img = props.img;
    const onclick = props.onclick;
    return (
        <div className="imageFrame" onClick={()=>onclick(img)}>
            <img alt={img} src={img} />
        </div>
    )
}

export default Card;