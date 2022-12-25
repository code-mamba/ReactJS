import React, { Component, createRef } from "react";
import FRInput from "./ForwardRefInput";
class FrParentInput extends Component{
    constructor(props){
        super(props)
       this.inputRef = React.createRef()
    }
    clickHandler = ()=>{
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <FRInput ref = {this.inputRef}></FRInput>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
export default FrParentInput