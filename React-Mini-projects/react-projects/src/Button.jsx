function PrintHello(){
    console.log("hello");
}

function PrintBye(){
    console.log("bye")
}


export default function Button(){
    return  (<div><button onClick={PrintHello}>click me!</button>
    <p onClick={PrintBye}>say bye</p>
    </div>)
    
}