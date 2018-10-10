import React, { Component } from "react";
import NavBar from "./NavBar";
import "../css/Brand.css";
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";
import Footer from "./Footer";
class Brand extends Component{
    render(){
        let link = "/watch_details/"
        return(
            <div>
                <NavBar/>
                <br/>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 brand-statement">
                            <h3>{this.props.brand.details.name}</h3>
                            {this.props.brand.details.description}
                        </div>
                        <div className="col-lg-6">
                        <img className="brand-image img-fluid img-thumbnail shadow" src={this.props.brand.details.image} alt="brand"/>
                        </div>
                    </div>
                </div>
                    <div className="container-fluid">
                    <div className="row justify-content-center">
                            {this.props.brand.items.map((item, index) => (
                                <Card key={index} className="shadow m-3">
                                <Link to={link + item.name}>
                                    <CardImg top width="100%" className=" img-fluid" src={item.image} style={{ width: 280, height: 350 }} alt="item" />
                                </Link>
                                    <CardBody>
                                        <CardTitle className="item-title">{item.name}</CardTitle>
                                        <CardText className="bg-light">${item.price}</CardText>
                                    </CardBody>
                                </Card>
                            ))

                            }

                        </div>
                    </div>  
                    <Footer/>              
            </div>
        )
    }
}

export default Brand;