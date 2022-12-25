import React, { Component } from "react";
class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(err){
        return{
            hasError: true
        }
    }
render(){
    if(this.state.hasError){
        return(
            <h1>Something Went Wrong</h1>
        )

    }
    return(
        
        <div>
            <h1>{this.props.children}</h1>
        </div>
    )
}
}
export default ErrorBoundary