import React from "react";
import NavBar from "./NavBar";
import jaegerAnalog from "../watchList/jaeger/jaegerAnalog";
import jaegerDigital from "../watchList/jaeger/jaegerDigital";
import milleAnalog from "../watchList/mille/milleAnalog";
import milleDigital from "../watchList/mille/milleDigital";
import "../css/WatchDetails.css";
import { connect } from "react-redux";
import { addItem, showCart } from "../redux/actions";
import { Button} from 'reactstrap';
import Footer from "./Footer";

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item)),
        showCart: value => dispatch(showCart(value))
    };
};

let watch = (props)=>{
    const { name, addItem, showCart} = props;
   let details = {};
    
    let getItem = (brand)=>{
        brand.items.forEach(watch => {
            if (name === watch.name) {
                details = { ...watch, quantity: 1 }
            }
        });
    }

    getItem(jaegerAnalog);
    getItem(jaegerDigital);
    getItem(milleAnalog);
    getItem(milleDigital);

    let addToCart = ()=>{
        addItem(details);
        showCart(true);
    };
   
    return(
        <div>
            <NavBar/>
            <br/>
            <div className="container">
              <div className="row">
               <div className="watch col-lg-6 d-md-flex justify-content-sm-center justify-content-lg-start ">
                   <h2 className="text-sm-center">{details.name}</h2>
                    <br/>
                        <img className="img-fluid" src={details.image} alt="watch" style={{maxWidth: 300, maxHeight: 400 }} />
               </div>
                    <div className="specifications col-lg-6">
                 <h2 className="text-center">Specifications</h2>
                 <ul className="list-group">
                            <li className="list-group-item list-group-item-secondary">CASE SIZE:  <span className="float-right">{details.case_size}</span></li>
                            <li className="list-group-item list-group-item-secondary">CASE THICKNESS:  <span className="float-right">{details.case_thickness}</span></li>
                            <li className="list-group-item list-group-item-secondary">STRAP WIDTH:  <span className="float-right">{details.strap_width}</span></li>
                            <li className="list-group-item list-group-item-secondary">GLASS:  <span className="float-right">{details.glass}</span></li>
                            <li className="list-group-item list-group-item-secondary">WATER RESISTANCE:  <span className="float-right">{details.water_resistance}</span></li>
                 </ul>
                 <br/>
                 <h3>Price:  ${details.price.toFixed(2)}</h3>
                        <Button onClick={addToCart} type="button" className="btn btn-danger">Add To Cart</Button>
               </div>
              </div>
            </div>
            <Footer/>
        </div>
    )
}

const WatchDetails = connect(null, mapDispatchToProps)(watch);

export default WatchDetails;