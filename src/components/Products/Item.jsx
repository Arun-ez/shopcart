import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContextProvider";

const Item = ({ product }) => {

    let { loadCart } = useContext(DataContext);

    const toCart = async () => {
        product.qty = 1;
        try {
            let response = await fetch("http://localhost:3000/cart", {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            loadCart();
            alert("Product Added to Cart")
        } catch (err) {
            console.log(err);
        }
    }

    const check = () => {
        toCart();
    }

    return (
        <div id="item">

            <Link to={`/products/${product.category}/${product.id}`} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black" }}>
                <div id="imagebox">
                    <img src={product.thumbnail} alt="product" />
                </div>

                <div id="name"> {product.name} </div>
            </Link>


            <p> Price :  ₹{product.current_price} </p>
            <button onClick={check}> Add To Cart </button>
        </div>
    )
}

export default Item;
