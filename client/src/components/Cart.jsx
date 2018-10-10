import React, { Component } from 'react';
import { connect } from "react-redux";
import "../css/Navbar.css";
import "../css/Cart.css";
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
                            <div className=" row" key={index}>
                                <div><img className="col-4 img-fluid" src={item.image} alt="watch" style={{ maxWidth: 80, maxHeight: 130 }} /></div>
                                <div className="col-6">
                                    <div className="item-name">{item.name}</div>
                                    <div>${item.price.toFixed(2)}</div>
                                    <div><Button className="bg-light text-info" onClick={() => this.handleSubtract(index)}>-</Button> &nbsp; {item.quantity} &nbsp;
                                         <Button className="bg-light text-info" onClick={() => this.handleAdd(index)}>+</Button> &nbsp; ${(item.quantity * item.price).toFixed(2)}</div>
                                </div>
                                <div className="col-2">
                                    <Button onClick={() => this.handleRemoveItem(index)} style={{ marginLeft: 50, borderRadius: 50 }}>x</Button>
                                </div>
                            </div>
                        ))}
                        <div>
                            <br/>
                            <hr/>
                            <p className="text-danger">Free Shipping!</p>
                            <p>Total:   ${totalPrice.toFixed(2)}</p>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button className="bg-primary" onClick={this.handleClose}>Continue Shopping</Button>
                        <Button className="bg-success">Checkout</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}


const Cart = connect(mapStateToProps, mapDispatchToProps)(cartList);
export default Cart;