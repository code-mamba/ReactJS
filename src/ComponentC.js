import React, { Component } from "react";
import ComponentE from "./ComponentE";

class ComponentC extends Component{
    render(){
        return(
        <div>
            <h2>Hey User</h2>
        <ComponentE></ComponentE>
        </div>
        )
    }
}

export default ComponentC