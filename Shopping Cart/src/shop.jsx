import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function Shop() {
    const [loading, setLoading] = useState(null);
    const [products, setProducts] = useState([]);
    const {cartItems, setCartItems} = useOutletContext();

    function handleClick(){
        let value = event.target.parentNode.children[0].children[2].children[1].children[1].value;
        if(value){
            setCartItems(cartItems + parseInt(value));
        }
        event.target.parentNode.children[0].children[2].children[1].children[1].value = "";
    }

    useEffect(() => {
        async function loadProducts(){
            setLoading(true);
            async function fetchProducts(){
                const productIDs = [8,9,10,13,14,16,17,19,20,22,23,24,25,28,29,30,31,32,33,35];
                const promises = productIDs.map(async (i) => {
                    let url = "https://api.escuelajs.co/api/v1/products/" + "" + i;
                    const response = await fetch(url);
                    const json = await response.json();
                    return({id: json.id, title: json.title, price: json.price, image: json.images[0]});
                });
                const fetchedProducts = await Promise.all(promises);
                setProducts(fetchedProducts);
            }
            await fetchProducts();
            setLoading(false);
        }
        loadProducts();
    }, []);


    return(
        <>
        {(loading || !products) ?
        <div className="loading">
            <div className="loader"></div>
        </div>
        :
        (<div className="products">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <div className="product_container">
                        <img src={product.image}></img>
                        <p>{product.title}</p>
                        <div className="price">
                            <p>Price: {product.price}₹</p>
                            <div className="input">
                                <label htmlFor={`quantity_${product.id}`}>Qty:</label>
                                <input type="number" placeholder="0" id={`quantity_${product.id}`}></input>
                            </div>
                        </div>
                    </div>
                    <button type="submit" onClick={handleClick}>Add To Cart</button>
                </div>
            ))}
        </div>)}
        </>
    )
  }
  
  export default Shop
  