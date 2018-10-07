import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { connect } from "react-redux";
import { showCart } from "../redux/actions";

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
        animation: 'title-animation 10s linear'
    }
   
    let navBarAnimation = (time)=>{
        return { animation: `move-down ${time}s`}
    }

    const {showCart, cart} = props;

    let displayCart = ()=>{
        showCart(true);
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
                <div className="cart-icon navBar" onClick={displayCart}><img src={require('../images/shopping-cart-icon.png')} style={{ width: 40, height: 40 }} alt="cart-icon" />Cart <span className={cart.items.length > 0 ? "item-count" : ""}>{cart.items.length > 0 ? cart.items.length : ""}</span></div>
                <div className="title" style={props.isHome ? titleAnimation : {}}>Metrova</div>
            </div>
             <Cart />
        </div>
    )
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(navigation);

export default NavBar;