import React, { useState } from "react";

function LoginForm({onLogin}){
    const [email,SetEmail] =useState("")
    const [password,SetPassword] =useState("");

    function handleSubmit(event){
        event.preventDefault();
        onLogin({email,password});
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={e => SetEmail(e.target)} placeholder="Email"/>
            <input value={password} onChange={e => SetPassword(e.target.value)} placeholder="Password" type="password"/>
            <button type="submit">Log in</button>
        </form>


    )

}


export default LoginForm;