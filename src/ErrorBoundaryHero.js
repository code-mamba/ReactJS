
import React from "react";
function Hero({SuperHero}){

    if(SuperHero ==='Joker'){
        throw new Error("Not a Hero")
    }

    return(
        <h1>Hi{SuperHero}</h1>
        
    )


}

export default Hero