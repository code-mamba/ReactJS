import React, { Component } from "react";
class Greet extends Component{

    clickHandler(e){
        e.preventDefault()
        console.log("clicked the button")
    }
    render(){
        return (<div>
            <h1>class component</h1>
            <button onClick={this.clickHandler}>Click Me</button>
            <button type ="submit">Submit</button>
            </div>)
    }
}

export default Greet