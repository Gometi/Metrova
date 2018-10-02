import React from "react";
import NavBar from "./NavBar";
import jaegerAnalog from "../watchList/jaeger/jaegerAnalog";
import jaegerDigital from "../watchList/jaeger/jaegerDigital";
import milleAnalog from "../watchList/mille/milleAnalog";
import milleDigital from "../watchList/mille/milleDigital";
import "../css/WatchDetails.css";


let WatchDetails = (props)=>{
   let details = {};
    
    let getItem = (brand)=>{
        brand.items.forEach(watch => {
            if (props.name === watch.name) {
                details = { ...watch }
                console.log(details)
            }
        });
    }

    getItem(jaegerAnalog);
    getItem(jaegerDigital);
    getItem(milleAnalog);
    getItem(milleDigital);
   
    return(
        <div>
            <NavBar/>
            <br/>
            <div className="container">
              <div className="row">
               <div className="watch ">
                   <h2 className="ml-5 pl-4">{details.name}</h2> <br/>
                        <img className="img-fluid" src={details.image} alt="watch" style={{maxWidth: 300, maxHeight: 400 }} />
               </div>
                    <div className="specifications offset-md-2">
                 <h2 className="ml-5 pl-5">Specifications</h2>
                 <ul className="list-group">
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">CASE SIZE:  <span className="ml-5">{details.case_size}</span></li>
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">CASE THICKNESS:  <span className="ml-5">{details.case_thickness}</span></li>
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">STRAP WIDTH:  <span className="ml-5">{details.strap_width}</span></li>
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"><span className="mr-5 pr-5">GLASS:</span>  <span className="ml-5">{details.glass}</span></li>
                            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">WATER RESISTANCE:  <span className="ml-5">{details.water_resistance}</span></li>
                 </ul>
                 <br/>
                 <h3>Price:  ${details.price}</h3>
                        <button type="button" class="btn btn-danger">Add To Cart</button>
               </div>
              </div>
            </div>
        </div>
    )
}

export default WatchDetails;