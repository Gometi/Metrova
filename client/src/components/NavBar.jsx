import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

let NavBar = ()=>{
    return (
        <div>
            <div className="navigation">
                <Link to="/" className="home links navBar">Home</Link>
                <div className="analog navBar">Analog
                    <Link to="/brand/jaeger-alpha-analog" className="list links">Jaeger Alpha</Link>
                    <div className="list">Mille Deluxe</div>
                </div>
                <div className="digital navBar">Digital
                <div className="list">Jaeger Alpha</div>
                    <div className="list">Mille Deluxe</div>
                </div>
                <div className="about navBar">About</div>
                <div className="contact navBar">Contact</div>
                <div className="title">Metrova</div>
            </div>
        </div>
    )
}

export default NavBar;