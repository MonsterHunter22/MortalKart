import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "/MK.png";

function Navbar() {
    const { cart } = useCart();

    return (
        <nav className="navbar">

            <Link to="/" className="logo-link">
                <img
                    src={logo}
                    alt="MK Logo"
                    className="navbar-logo"
                />
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">
                    Cart 🛒 ({cart.length})
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;