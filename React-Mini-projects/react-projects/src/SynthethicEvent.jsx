function Example(){
    function handleClick(event){
        console.log(event)
    }

    return <button onClick={handleClick}>click</button>;
}

export default Example;