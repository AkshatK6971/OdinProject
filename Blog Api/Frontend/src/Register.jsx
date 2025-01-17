import { useState } from "react";

function Register() {
    const [error, setError] = useState(null);
    
    const handleSubmit = async () => {
        event.preventDefault();
        const email = event.target.parentNode.children[0].children[1].value;
        const password = event.target.parentNode.children[1].children[1].value;
        event.target.parentNode.children[0].children[1].value = "";
        event.target.parentNode.children[1].children[1].value = "";

        const url = "http://localhost:3000/signup"
        const response = await fetch(url, { method:"POST",body: new URLSearchParams(`email=${email}&password=${password}`)});
        const res_json = await response.json();
        
        if(res_json.message == "Signup successful")
            setError("Registered Successfully.");
        else
            setError("Error.");        
    }

    return(
        <>
            <div className="register">
                <h1>Register</h1>
                <form method="post">
                    <div className="input">
                        <label htmlFor="email" name="email">Email: </label>
                        <input type="email" id="email" name="email"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="password" name="password">Password: </label>
                        <input type="password" id="password" name="password"></input>
                    </div>  
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            {error && (
                <p className="error"> {error} </p>)}
        </>
    )
}

export default Register