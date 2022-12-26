import React, { Component } from "react";
import UpdatedComponent from "./HocwithCounter";
class ClickCounter extends Component{

    render(){
        const{count,increamentCount} = this.props
        return(
            <div>
                <button onClick={increamentCount}>Clicked {count} times</button>
            </div>
        )
    }
}
export default UpdatedComponent(ClickCounter) 