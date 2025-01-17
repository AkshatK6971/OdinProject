import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
    const params = useParams();
    const [loading, setLoading] = useState(null);
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadBlogs(){
            setLoading(true);
            async function fetchBlogs(){
                const url = "http://localhost:3000/blog/" + params.blogId;
                const response = await fetch(url);
                const json = await response.json();
                setBlog(json);
            }
            await fetchBlogs();
            setLoading(false);
        }
        loadBlogs();
    }, [params.blogId]);

    const handleDelete  = async () => {
        if(!localStorage.getItem("token"))
            setError("Only authenticated users can perform this action.");
        else{
            const commentId = event.target.parentNode.parentNode.parentNode.id.split("_")[1];
            const url = "http://localhost:3000/comment/" + commentId;
            const token = localStorage.getItem("token");
            
            const headers = new Headers();
            headers.append("Authorization", `Bearer ${token}`);
            const response = await fetch(url, {method: "DELETE", headers: headers});
            const res_json = await response.json();

            if(res_json.message == "Unauthorized"){
                setError("You are not authorized to delete this comment.");
            }
            else{
                navigate("/");
            }
        }
    }

    const handleUpdate = async () => {
        event.preventDefault();
        if(!localStorage.getItem("token"))
            setError("Only authenticated users can perform this action.");
        else{
            const commentId = event.target.parentNode.parentNode.parentNode.id.split("_")[1];
            navigate(`/comment/${commentId}/update`);
        }
    }

    const handleAdd = async () => {
        event.preventDefault();
        if(!localStorage.getItem("token"))
            setError("Only authenticated users can perform this action.");
        else{
            navigate(`/blog/${blog.id}/comment`);
        }
    }

    return(
        <>
        {(loading || !blog) ?
            (<div className="heading">
                <h1>Loading...</h1>
            </div>)
            :
            (<div className="blog_single">
                <h1>{blog.title}</h1>
                <h3>{blog.date}</h3>
                <h2>{blog.content}</h2>
                <div className="comments">
                    {blog.Comments.map((comment) => (
                        <div className="comment" key={comment.id} id={`comment_${comment.id}`}>
                            <div className="comment_heading">
                                <h3>{comment.userEmail}</h3>
                                <h4>{comment.date}</h4>
                            </div>
                            <div className="comment_content">
                                <h3>{comment.content}</h3>
                                <div className="comment_links">
                                    <p onClick={handleUpdate}>Update</p>
                                    <p onClick={handleDelete}>Delete</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button type="button" onClick={handleAdd}>Add Comment</button>
                {error && (
                <p className="error"> {error} </p>)}
            </div>)
        }
        </>
    )
}

export default Blog
