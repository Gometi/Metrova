import React, { Component } from 'react';
import { connect } from "react-redux";
import "../css/Navbar.css";
import "../css/Cart.css";
import { Row, Col } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { showCart, updateQuantity, removeItem } from "../redux/actions";

const mapStateToProps = state => {
    return { cart: state.cart }
};

const mapDispatchToProps = dispatch => {
    return {
        showCart: value => dispatch(showCart(value)),
        updateQuantity: value => dispatch(updateQuantity(value)),
        removeItem: itemIndex => dispatch(removeItem(itemIndex))
    }
};

class cartList extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }
    handleShow() {
        this.setState({
            show: true
        })
    }

    handleClose() {
        this.props.showCart(false)
    }

    handleAdd(itemIndex) {
        this.props.updateQuantity({ index: itemIndex, operator: "+" });
    }
    handleSubtract(itemIndex) {
        this.props.updateQuantity({ index: itemIndex, operator: "-" });
    }
    handleRemoveItem(itemIndex) {
        this.props.removeItem(itemIndex);
    }

    render() {
        let totalPrice = 0;
        this.props.cart.items.map(item => {
            return totalPrice += item.quantity * item.price;
        });
        return (
            <div>
                <Modal isOpen={this.props.cart.show}>
                        <ModalHeader toggle={this.handleClose} className="modal-title">My Cart [{this.props.cart.items.length}]</ModalHeader>

                    <ModalBody>
                        {this.props.cart.items.map((item, index) => (
                            <Row className="list-group-item" key={index}>
                                <Col md={4}><img className="img-fluid" src={item.image} alt="watch" style={{ maxWidth: 80, maxHeight: 130 }} /></Col>
                                <Col md={4}>
                                    <div className="item-name">{item.name}</div>
                                    <div>${item.price.toFixed(2)}</div>
                                    <div><Button onClick={() => this.handleSubtract(index)}>-</Button> &nbsp; {item.quantity} &nbsp; <Button onClick={() => this.handleAdd(index)}>+</Button> &nbsp; ${(item.quantity * item.price).toFixed(2)}</div>
                                </Col>
                                <Col md={2}>
                                    <Button className="btn-danger" onClick={() => this.handleRemoveItem(index)} style={{ marginLeft: 100, borderRadius: 50 }}>x</Button>
                                </Col>
                            </Row>
                        ))}
                        <div>
                            <p className="text-danger">Free Shipping!</p>
                            <p>Total:   ${totalPrice.toFixed(2)}</p>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button bsStyle="primary" onClick={this.handleClose}>Continue Shopping</Button>
                        <Button bsStyle="success">Checkout</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}


const Cart = connect(mapStateToProps, mapDispatchToProps)(cartList);
export default Cart;