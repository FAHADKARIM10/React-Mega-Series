import React from "react";

function HelloButton (){
    function handleClick(){
        alert("you clicked the button");
    }

    return(
        <button onClick={handleClick}>click me</button>
      
    );
}

export default HelloButton;