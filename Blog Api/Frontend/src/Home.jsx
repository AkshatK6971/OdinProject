import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [loading, setLoading] = useState(null);
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        async function loadBlogs(){
            setLoading(true);
            async function fetchBlogs(){
                const url = "http://localhost:3000/blogs";
                const response = await fetch(url);
                const json = await response.json();
                setBlogs(json);
            }
            await fetchBlogs();
            setLoading(false);
        }
        loadBlogs();
    }, []);

    return(
        <>
        {(loading || !blogs) ?
            (<div className="heading">
                <h1>Loading...</h1>
            </div>)
            :
            (<div className="blogs">
            {blogs.map((blog) => (
                <div key={blog.id} className="blog" id={`d_${blog.id}`}>
                    <h1>{blog.title}</h1>
                    <h2>{blog.date}</h2>
                    <Link to={`/blog/${blog.id}`}>Read</Link>
                </div>
            ))}
            </div>)
        }
        </>
    )
}

export default Home