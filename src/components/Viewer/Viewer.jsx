import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContextProvider";
import "./Viewer.css";

const Viewer = () => {
    let { id } = useParams();
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let { loadCart } = useContext(DataContext);

    const query = async (url) => {
        let response = await fetch(url);
        let details = await response.json();
        setData(details);
    }

    const load = async () => {
        let response = await fetch(`http://localhost:3000/products/${id}`);
        let data = await response.json();
        query(data.query_url);
    }

    const toCart = async () => {
        data.qty = 1;
        try {
            let response = await fetch("http://localhost:3000/cart", {
                method: "POST",
                body: JSON.stringify(data),
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

    useEffect(() => {
        load();
    }, [])

    setTimeout(() => {
        if (!data) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, 3000);

    return (

        data ?
            <div id="view">
                <div id="image">
                    <img src={data.thumbnails[0]} alt="product" />
                </div>

                <div style={{ flexDirection: "column", justifyContent: "flex-start", paddingRight: "40px" }}>
                    <p style={{ fontSize: "20px" }}> {data.name} </p>
                    <div id="prices">
                        <s> ₹{data.original_price} </s>
                        <p> ₹{data.current_price} </p>
                        <p style={{ color: "red" }}> Save{data.discount_percent}% </p>
                        <button onClick={check}> Add To Cart </button>
                    </div>

                    <div id="features">
                        <h2> Highlights </h2>
                        <div>
                            {data.highlights.map((elm, index) => {
                                return <p key={index}> {elm} </p>
                            })}
                        </div>

                    </div>
                </div>
            </div> : <h1 style={{ textAlign: "center" }}> {loading ? "Loading..." : "Product not found!"}  </h1>
    )
}

export default Viewer;
