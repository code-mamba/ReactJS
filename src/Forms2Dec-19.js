import React, { useState } from "react";
function Form2(){

    const [name,setName]= useState("")
    const[headingText,setheading] = useState("")
    function handleChange(event){
        
        setName(event.target.value)
        
    }
    function handleClick(){
        console.log(name)
        setheading(name)
    }
    return(
        <div className="container">
            <h1>Hello{headingText}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={handleChange}></input>
            <button onClick={handleClick}>Submit</button>

        </div>
    )
}
export default Form2