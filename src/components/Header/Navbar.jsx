import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";



const Navbar = () => {

    const navList = [
        { name: "Home", path: "/" },
        { name: "Smartphones", path: "products/smartphone" },
        { name: "Laptops", path: "products/laptop" },
        { name: "Skin & Beauty", path: "products/makeup" },
        { name: "Clocks", path: "products/clocks" },
        { name: "Contact Us", path: "/contact" },
        { name: "About Us", path: "/about" },
        { name: "FAQ", path: "/faq" },
    ]

    return (
        <div id="navbar">
            <div id="top">
                <div>

                </div>

                <div id="logo">
                    <h2> SHOPCART </h2>
                </div>

                <div>
                    <Link style={{ color: "black", textDecoration: "none" }} to="/cart"> <i className="fa-solid fa-cart-shopping"> </i> <span style={{ fontSize: "17px", fontWeight: "bold" }}> Cart </span> </Link>

                </div>
            </div>

            <div id="navlist">
                {navList.map((elm, index) => {
                    return <NavLink className="navitem" activeclassname="active" to={elm.path} key={index}> {elm.name} </NavLink>
                })}
            </div>
        </div>
    )
}

export default Navbar;
