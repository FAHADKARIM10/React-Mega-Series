import React, { useState } from "react";

function ColorToggle(){
    const[isDark,setDark] =useState(false);
    
    function handleToggle(e){
        console.log("clicked at",e.client,e.client);
        setDark(prev =>!prev);
    }


      return (
    <div style={{ padding: 20, background: isDark ? "#222" : "#eee" }}>
      <p>The theme is {isDark ? "Dark" : "Light"}</p>
      <button onClick={handleToggle}>Toggle theme</button>
    </div>
  );
}

export default ColorToggle;