import { Link } from "react-router-dom";

function ErrorPage(){
    return(
        <div className="error">
            <h1>404 Not Found</h1>
            <h2>Seems like you lost your way</h2>
            <h2>This may be of help :D</h2><Link to="/">Home</Link>
        </div>
    )
}

export default ErrorPage;