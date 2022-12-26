import { render } from "@testing-library/react";
import React from "react";
function MyFunct(){
        // return(
        //     <div>
        //         <h1>Hi Dhanush</h1>
        //     </div>
        // )
        return(
            React.createElement('div',null,React.createElement('h1',null,'Hi Dhanush'))
        )
    
    
}
export default MyFunct