import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddComment() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleAdd = async () => {
        event.preventDefault();
        const blogId = window.location.href.split("/")[4];
        const url = `http://localhost:3000/${blogId}/comment`;
        const token = localStorage.getItem("token");
        const content = event.target.parentNode.children[1].value;
        event.target.parentNode.children[1].value = "";
            
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        const response = await fetch(url, {method: "POST", headers: headers, body: new URLSearchParams(`content=${content}`)});
        const res_json = await response.json();

        if(res_json.message == "Unauthorized"){
            setError("You are not authorized to update this comment.");
        }
        else{
            navigate("/");
        }
    }

    return(
        <>
            <div className="comment_add">
                <h2>Add Comment</h2>
                <form method="post">
                    <label name="content" htmlFor="content">Comment:</label>
                    <input type="text" name="content" id="content"></input>
                    <button type="submit" onClick={handleAdd}>Submit</button>
                </form>
            </div>
            {error && (
                <p className="error"> {error} </p>)}
        </>
    )
}

export default AddComment