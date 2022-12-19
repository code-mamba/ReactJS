import React from "react"
function BolingVerdicts(props){
    if(props.temperature>100){
        return <p>The water would boil</p>
    }
    else{
        return <p>The water would not be boil</p>
    }
}

export default BolingVerdicts