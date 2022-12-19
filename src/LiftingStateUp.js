
import React, { Component } from "react";
import BolingVerdicts from "./Boilingverdict";
class Calculator extends Component{    
    constructor(props){
    super(props)
    this.handleChange =  this.handleChange.bind(this)
    this.state = {temperature:''}

}

handleChange(e){
    this.setState({temperature: e.target.value});
    console.log(this.state.temperature)
}
render(){
    const temperature = this.state.temperature;

    return(
    <div>
        <h1>Enter temperature</h1>
        <input value={temperature} onChange={this.handleChange}></input>
        <BolingVerdicts temperature ={temperature}></BolingVerdicts>
        
    </div>
    )
}}


export default Calculator