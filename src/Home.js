import React from "react";

function Home(){
    const user = false
    const annonymous = "stranger"
    if(user){
        return(
        <h1>hello, {user}</h1>
        )
    }
    else{
        return(
        <h1>hello,{annonymous}</h1>
        )
    }
}

export default Home