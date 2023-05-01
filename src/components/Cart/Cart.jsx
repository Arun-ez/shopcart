
import "./Cart.css"
import { DataContext } from "../contexts/DataContextProvider";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = () => {

    let { cart } = useContext(DataContext);

    console.log(cart);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}> Cart </h1>
            <div id="cart-container">
                {cart.map((elm, id) => {
                    return <CartItem product={elm} key={id} />
                })}
            </div>
        </div>
    )
}

export default Cart;
