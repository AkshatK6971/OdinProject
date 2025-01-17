import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <p>My Blogs</p>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Nav