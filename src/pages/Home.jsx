import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import Footer from "../components/footer";
import HeroBanner from "./HeroBanner";


function Home() {
    return (
        <div className="home">
            
            <HeroBanner/>

            <Category/>

            <Footer/>

        </div>
    );
}

export default Home;