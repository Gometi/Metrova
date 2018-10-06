import React, { Component } from "react";
import NavBar from "./NavBar";
import "../css/Brand.css";
import { Link } from 'react-router-dom';
import {Grid, Row, Col } from 'react-bootstrap';
class Brand extends Component{
    render(){
        let link = "/watch_details/"
        return(
            <div>
                <NavBar/>
                <Grid>
                    <Row>
                        <Col md={6} className="brand-statement">
                            <h3>{this.props.brand.details.name}</h3>
                            {this.props.brand.details.description}
                        </Col>
                        <Col md={6}>
                        <img className="brand-image img-fluid img-thumbnail shadow" src={this.props.brand.details.image} alt="brand"/>
                        </Col>
                    </Row>
                </Grid>
                    <Grid>
                    <Row>
                            {this.props.brand.items.map((item, index) => (
                                <Col sm={6} md={4} key={index} className="card shadow m-4">
                                <Link to={link + item.name}>
                                    <img className="card-image-top img-fluid" src={item.image} style={{ height: 350 }} alt="item" />
                                </Link>
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text bg-light">${item.price}</p>
                                    </div>
                                </Col>
                            ))

                            }

                        </Row>
                    </Grid>                
            </div>
        )
    }
}

export default Brand;