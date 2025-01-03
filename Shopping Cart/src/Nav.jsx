/* eslint react/prop-types: 0 */
import { Link, useOutletContext } from "react-router-dom";

function Nav(){
    const {cartItems} = useOutletContext();
    return(
        <div className="navbar">
            <div className="links">
                <p>SHOP</p>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
            <div className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>2</svg>
                <p>{cartItems}</p>
            </div>
        </div>
    )
}

export default Nav