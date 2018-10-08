import React from "react";
import NavBar from "./NavBar";
import jaegerAnalog from "../watchList/jaeger/jaegerAnalog";
import jaegerDigital from "../watchList/jaeger/jaegerDigital";
import milleAnalog from "../watchList/mille/milleAnalog";
import milleDigital from "../watchList/mille/milleDigital";
import "../css/WatchDetails.css";
import { connect } from "react-redux";
import { addItem, showCart } from "../redux/actions";
import { Grid, Row, Col, Button} from 'react-bootstrap';

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
            <Grid>
              <Row>
               <Col xs={12} sm={6} md={6} className="watch ">
                   <h2>{details.name}</h2> <br/>
                        <img className="img-fluid" src={details.image} alt="watch" style={{maxWidth: 300, maxHeight: 400 }} />
               </Col>
                    <Col xs={12} sm={6} md={6} className="specifications">
                 <h2 className="ml-5 pl-5">Specifications</h2>
                 <ul className="list-group">
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">CASE SIZE:  <span className="ml-5">{details.case_size}</span></li>
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">CASE THICKNESS:  <span className="ml-5">{details.case_thickness}</span></li>
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">STRAP WIDTH:  <span className="ml-5">{details.strap_width}</span></li>
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"><span className="mr-5 pr-5">GLASS:</span>  <span className="ml-5">{details.glass}</span></li>
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">WATER RESISTANCE:  <span className="ml-5">{details.water_resistance}</span></li>
                 </ul>
                 <br/>
                 <h3>Price:  ${details.price.toFixed(2)}</h3>
                        <Button onClick={addToCart} type="button" className="btn btn-danger">Add To Cart</Button>
               </Col>
              </Row>
            </Grid>
        </div>
    )
}

const WatchDetails = connect(null, mapDispatchToProps)(watch);

export default WatchDetails;