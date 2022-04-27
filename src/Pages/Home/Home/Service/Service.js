import React from 'react';
import { Link } from 'react-router-dom';

import "../Service/Service.css"

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;

    return (
        <div className='service py-5'>
            <img className='my-3 border border rounded' src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: {price} Taka</p>

            <Link to="/checkout">
                <button className='btn btn-success'>Book Now</button>
            </Link>
        </div>
    );
};

export default Service;