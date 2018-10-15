import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { connect } from "react-redux";
import { showCart } from "../redux/actions";
import Hamburger from "./Hamburger";


const mapStateToProps = state => {
    return { cart: state.cart }
};
const mapDispatchToProps = dispatch => {
    return {
        showCart: value => dispatch(showCart(value))
    };
};


let navigation = (props)=>{
    let titleAnimation = {
        animationName: 'title-animation'
    }
   
    let navBarAnimation = (time)=>{
        return { animation: `move-down ${time}s`}
    }

    const {showCart, cart} = props;

    let displayCart = ()=>{
        showCart(true);
    }

    
    
    return (
        <div style={{ background: "#F4F4F4"}}>
            <div className="navigation">
                <Link to="/" className="home links navBar" style={props.isHome ? navBarAnimation(3) : {}}>Home</Link>
                <div className="analog navBar" style={props.isHome ? navBarAnimation(5) : {}}>Analog
                    <Link to="/brand/jaeger-alpha-analog" className="list links">Jaeger Alpha</Link>
                    <Link to="/brand/mille-deluxe-analog" className="list links">Mille Deluxe</Link>
                </div>
                <div className="digital navBar" style={props.isHome ? navBarAnimation(6) : {}}>Digital
                    <Link to="/brand/jaeger-alpha-digital" className="list links">Jaeger Alpha</Link>
                    <Link to="/brand/mille-deluxe-digital" className="list links">Mille Deluxe</Link>
                </div>
                <Link to="/about" className="about navBar" style={props.isHome ? navBarAnimation(7) : {}}>About</Link>
                <Link to="/contact" className="contact navBar" style={props.isHome ? navBarAnimation(9) : {}}>Contact</Link>
                <div className="cart-icon navBar" style={props.isHome ? navBarAnimation(10) : {}} onClick={displayCart}><img src={require('../images/shopping-cart-icon.png')} style={{ width: 40, height: 40 }} alt="cart-icon" />Cart <span className={cart.items.length > 0 ? "item-count" : ""}>{cart.items.length > 0 ? cart.items.length : ""}</span></div>
                <div className="title" style={props.isHome ? titleAnimation : {}}>Metrova</div>
            </div>
            <Hamburger/>           
             <Cart />
        </div>
    )
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(navigation);

export default NavBar;