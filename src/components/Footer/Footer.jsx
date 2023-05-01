import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div id="footer">
            <div style={{ flexDirection: "column" }}>
                <h1 style={{ lineHeight: "0" }}> SHOPKART </h1>
                <p> ©2023 shopkart.com </p>
            </div>

            <div style={{ flexDirection: "column" }}>
                <div>
                    <Link id="link" to="/contact"> Contact US </Link>
                    <Link id="link" to="/about"> About US </Link>
                    <Link id="link" to="/faq"> FAQs </Link>
                </div>

                <div>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-solid fa-comment"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
