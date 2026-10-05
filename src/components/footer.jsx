import React from "react";
import { Link } from "react-router-dom";
import "../Css/Footer.css"


function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                
                <div className="footer-section">
                    <h2>MortalKart 🛍️</h2>
                    <p>
                        Products that you don't need,
                        but that you want.
                    </p>
                </div>

                
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </div>

                
                <div className="footer-section">
                    <h3>Customer Support</h3>
                    <a href="#contactus">
                        Contact Us
                    </a>
                    <a href="#faq">FAQs</a>
                    <a href="#shipping">Shipping Policy</a>
                    <a href="#returns">Return Policy</a>
                </div>

                
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <a href="https://www.instagram.com/"
                       target="_blank"
                       rel="noreferrer">
                        Instagram
                    </a>
                    <a href="https://www.facebook.com/"
                       target="_blank"
                       rel="noreferrer">
                        Facebook
                    </a>
                    <a href="https://www.youtube.com/"
                       target="_blank"
                       rel="noreferrer">
                        YouTube
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} MortalKart.
                    All rights reserved.
                </p>
                <p>Made with ❤️ for online shoppers.</p>
            </div>

        </footer>
    );
}

export default Footer;