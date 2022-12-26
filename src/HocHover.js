import React, { Component } from "react";
import UpdatedComponent from "./HocwithCounter";

class Hover extends Component{

    render(){
        const{count,increamentCount} = this.props
        return(
            <h1 onMouseOver={increamentCount}>Hovered {count} times</h1>
        )
    }
}
export default UpdatedComponent(Hover) 