import { createContext, useEffect, useState } from "react"

export let DataContext = createContext();

const DataContextProvider = ({ children }) => {

    let [data, setData] = useState(null);
    let [cart, setCart] = useState([]);

    const loadAll = async () => {
        try {
            let response = await fetch("http://localhost:3000/products");
            let base = await response.json();
            setData(base);
        } catch (err) {
            console.error(err);
        }
    }

    const loadCart = async () => {
        try {
            let response = await fetch("http://localhost:3000/cart");
            let base = await response.json();
            setCart(base);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        loadAll();
        loadCart();
    }, []);

    return (
        <DataContext.Provider value={{ data, cart, setCart, loadCart }}> {children} </DataContext.Provider>
    )
}

export default DataContextProvider;
