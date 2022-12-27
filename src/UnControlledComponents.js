import React, { Component } from "react";
class NameForm extends Component{
    constructor(props){
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
    
    }

    clickHandle(){
        alert(`Hi this is ${this.Name.value}`)
    }
    render(){
        return(
            <div>
                <span>Enter your name</span>
                <input type="text" ref={(input)=>{this.Name = input}}></input>
                <button type="submit" ref={(input)=>{this.submit = input}} onClick = {this.clickHandle}>submit</button>
            </div>
        )
    }
}
export default NameForm