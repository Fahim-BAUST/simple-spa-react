import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    let peoples = [];

    for (const products of cart) {
        total = total + products.price;
        peoples.push(products.name + ", ");
    }

    return (
        <div className="my-group">
            <h3 className="head">MY GROUP</h3>
            <h5>People Selected: {cart.length}</h5>
            <p>Totall Cost : {total}</p>
            <h3 className="selected-people">Selected Peoples: <span><FontAwesomeIcon icon={faCheckCircle} /></span> <br /> <span> {peoples}</span> </h3>
        </div>
    );
};

export default Cart;