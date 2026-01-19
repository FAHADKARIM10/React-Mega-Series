import React, { useState } from "react";

function SearchBox(){
    const[query,setQuery] =useState("");

    function handleChange(event){
        setQuery(event.target.value);
    }


    function handleSubmit(event){
           event.preventDefault();
           onSearch(query);             
           
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={query} onChange={handleChange} placeholder="searc..."></input>
            <button type="submit">search</button>
        </form>
    );
}

export default SearchBox;