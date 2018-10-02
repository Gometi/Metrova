import React, { Component } from "react";
import NavBar from "./NavBar";
import "../css/Brand.css";
import { Link } from 'react-router-dom';
class Brand extends Component{
    render(){
        let link = "/watch_details/"
        return(
            <div>
                <NavBar/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="brand-statement col-6">
                            <h3>{this.props.brand.details.name}</h3>
                            {this.props.brand.details.description}
                        </div>
                        <img className="brand-image img-fluid img-thumbnail shadow" src={this.props.brand.details.image} alt="brand"/>
                    </div>
                </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            {this.props.brand.items.map((item, index) => (
                                <div key={index} className="card shadow m-4" style={{ 'maxWidth': 290 }}>
                                <Link to={link + item.name}>
                                    <img className="card-image-top img-fluid" src={item.image} style={{ height: 350 }} alt="item" />
                                </Link>
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text bg-light">${item.price}</p>
                                    </div>
                                </div>
                            ))

                            }

                        </div>
                    </div>                
            </div>
        )
    }
}

export default Brand;