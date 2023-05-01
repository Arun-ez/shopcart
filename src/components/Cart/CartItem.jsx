
const CartItem = ({ product }) => {
    return (
        <div id="cartItem">
            <div>
                <img style={{ height: "200px" }} src={product.thumbnail || product.thumbnails[0]} alt="product-image" />
            </div>
            <div>
                <p> {product.name} </p>
            </div>
        </div>
    )
}

export default CartItem;
