import React from "react";
import { Link } from "react-router-dom";
import "../Css/HeroBanner.css";

function HeroBanner() {
    return (
        <section className="hero-banner">
            <div className="hero-overlay">
                <div className="hero-content">
                    <span className="hero-tag">
                        YOUR NEXT FAVORITE STORE
                    </span>

                    <h1>
                        Welcome to <span>MortalKart</span> 🛍️
                    </h1>

                    <p>
                        Products that you don't need,
                        <br />
                        but that you want.
                    </p>

                    <Link to="/products" className="hero-btn">
                        Shop Now <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;