function handleSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form(){
    return (
        <form>
            <input placeholder="write something"/>
            <button onClick={handleSubmit}>submit</button>
        </form>
    );
}