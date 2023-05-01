
import { useEffect, useState } from 'react'
import Item from './Item'
import "./Products.css"
import Error from '../Error/Error'
import { useParams } from 'react-router-dom'

const Products = ({ title }) => {

    let param = useParams()
    let [data, setData] = useState(null);

    let [loading, setLoading] = useState(true);

    const load = async () => {
        let response = await fetch(`http://localhost:3000/products?category=${param.category}`);
        let base = await response.json();
        setData(base);
    }

    useEffect(() => {
        load();
    }, [param.category])

    setTimeout(() => {
        if (!data) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, 3000);

    return (
        data ?
            <div id="products">
                <h1> {title} </h1>

                <div id="container">
                    {data.map((elm) => {
                        return <Item product={elm} key={elm.id} />
                    })}
                </div>
            </div> : loading ? <h1 style={{ textAlign: "center" }}> Loading ... </h1> : <Error />
    )
}

export default Products
