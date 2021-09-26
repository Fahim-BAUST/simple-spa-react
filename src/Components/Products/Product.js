import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserClock } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const user = <FontAwesomeIcon icon={faUserClock} />

    const { name, img, role, price, country, main } = props.products;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="weight">
                <h4 className="product-name">Name: {name}</h4>
                <p>Country: {country}</p>
                <p><small>Role: {role}</small></p>
                <p><small>Main: {main}</small></p>
                <p>Price: {price}$</p>

                <button onClick={() => props.handleAddToCart(props.products)} className="btn-regular">{user}  Add to group</button>
            </div>

        </div>
    );
};

export default Product;