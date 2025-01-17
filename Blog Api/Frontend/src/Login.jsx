import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 
        
    const handleSubmit = async () => {
        event.preventDefault();
        const email = event.target.parentNode.children[0].children[1].value;
        const password = event.target.parentNode.children[1].children[1].value;
        event.target.parentNode.children[0].children[1].value = "";
        event.target.parentNode.children[1].children[1].value = "";

        const url = "http://localhost:3000/login"
        const response = await fetch(url, { method:"POST", body: new URLSearchParams(`email=${email}&password=${password}`)});
        const res_json = await response.json();
        
        if(res_json.token){
            const token = res_json.token;
            localStorage.setItem("token", token);
            navigate("/"); 
        }
        else
            setError("Error.");        
    }

    return(
        <>
            <div className="login">
                <h1>Login</h1>
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

export default Login