import React from "react";
import FancyBorder from "./FancyBorder";
function Dialogue(props){
    return(
        <FancyBorder color ="blue">
            <h1 className="title">
                {props.title}
            </h1>
            <p className="message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}
export default Dialogue