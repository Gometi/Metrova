import React, { Component } from 'react';
import { connect } from "react-redux";
import "../css/Navbar.css";
import { Button, Modal, Row, Col } from 'react-bootstrap';
import { showCart } from "../redux/actions";

const mapStateToProps = state => {
    return { cart: state.cart }
};

const mapDispatchToProps = dispatch => {
    return { showCart: value => dispatch(showCart(value)) }
};

class cartList extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleShow() {
        this.setState({
            show: true
        })
    }

    handleClose() {
        this.props.showCart(false)
    }

    render() {
        return (
            <div>
                <Modal show={this.props.cart.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>My Cart[{this.props.cart.items.length}]</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.cart.items.map((item, index) => (
                            <Row className="list-group-item" key={index}>
                                <Col md={4}><img className="img-fluid" src={item.image} alt="watch" style={{ maxWidth: 100, maxHeight: 150 }} /></Col>
                                <Col md={8}>
                                    <div>{item.name}</div>
                                    <div>${item.price}</div>
                                </Col>
                            </Row>
                        ))}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Continue Shopping</Button>
                        <Button bsStyle="primary">Checkout</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}


const Cart = connect(mapStateToProps, mapDispatchToProps)(cartList);
export default Cart;