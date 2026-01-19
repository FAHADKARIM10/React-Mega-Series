import { useState } from "react"

export default function Counter(){
    let[count,setCount] =useState(0);

  


    


    return(
        <div>
            <h3>count ={count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )


}