import React, {Component} from 'react';
import { connect } from "react-redux";
import "../css/Navbar.css";
import { Button, Modal } from 'react-bootstrap';

const mapStateToProps = state =>{
   return {cart: state.cart}
};

class cartList extends Component {
    constructor(props){
        super(props);
        this.state = {
           show: false
        }
        this.handleShow = this.handleShow.bind(this);
    }
    handleShow(){
        this.setState({
            show: true
        })
    }

    render(){
        console.log('cart',this.props.cart)
        return (
            <div>
                <Modal show={this.state.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>One fine body...</Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
                <div className="cart">
                    List
            
                    <ul className="list-group list-group-flush">
                        {this.props.cart.items.map((item, index) => (
                            <li className="list-group-item" key={index}>
                                {item.name}
                                <img className="img-fluid" src={item.image} alt="watch" style={{ maxWidth: 300, maxHeight: 400 }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
    
}
    

const Cart = connect(mapStateToProps)(cartList);
export default Cart;