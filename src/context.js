import React,{useState} from "react"
import { FunctionContextComponent } from ",/FunctionContextComponent"
import {ClassContextComponent} from "./ClassContextComponent"

export default function Theme(){
    const[darkTheme,setDarkTheme] = useState(true)

    function toggleTheme(){
        setDarkTheme((prevDarkTheme)=>!prevDarkTheme)
    }
    return(
        <div>
            <ThemeContext.provider value ={darkTheme}>
                <button onClick={toggleTheme}>ToggleTheme</button>
                <FunctionContextComponent/>
                <ClassContextComponent/>
            </ThemeContext.provider>
        </div>
    )
}