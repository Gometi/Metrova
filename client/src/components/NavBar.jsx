import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";


let NavBar = (props)=>{
    let titleAnimation = {
        animation: 'title-animation 10s linear'
    }
   
    let navBarAnimation = (time)=>{
        return { animation: `move-down ${time}s`}
    }

    
    
    return (
        <div>
            <div className="navigation">
                <Link to="/" className="home links navBar" style={props.isHome ? navBarAnimation(5) : {}}>Home</Link>
                <div className="analog navBar" style={props.isHome ? navBarAnimation(8) : {}}>Analog
                    <Link to="/brand/jaeger-alpha-analog" className="list links">Jaeger Alpha</Link>
                    <Link to="/brand/mille-deluxe-analog" className="list links">Mille Deluxe</Link>
                </div>
                <div className="digital navBar" style={props.isHome ? navBarAnimation(11) : {}}>Digital
                    <Link to="/brand/jaeger-alpha-digital" className="list links">Jaeger Alpha</Link>
                    <Link to="/brand/mille-deluxe-digital" className="list links">Mille Deluxe</Link>
                </div>
                <div className="about navBar" style={props.isHome ? navBarAnimation(14) : {}}>About</div>
                <div className="contact navBar" style={props.isHome ? navBarAnimation(17) : {}}>Contact</div>
                <div className="title" style={props.isHome ? titleAnimation : {}}>Metrova</div>
            </div>
             <Cart />
        </div>
    )
}

export default NavBar;