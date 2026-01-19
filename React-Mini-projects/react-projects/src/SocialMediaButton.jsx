import React, { useState } from "react";

function LikeButton(){
    const [liked,setLiked] =useState(false);
    
    function handleToggle(){
        setLiked(prev =>!prev);
    }

    return(
        <button onClick={handleToggle}>
            {liked ? "♥ Liked" : "♡ Like"}
        </button>

    )
}


export default LikeButton;