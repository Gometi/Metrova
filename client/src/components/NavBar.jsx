import React from "react";
import "../css/Navbar.css";

let NavBar = ()=>{
    return (
        <div>
            <div className="navigation">
                <div className="home navBar">Home</div>
                <div className="analog navBar">Analog
                    <div className="list">Jaeger Alpha</div>
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