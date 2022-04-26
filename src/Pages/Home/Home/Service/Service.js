import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Service/Service.css"

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service py-5'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>
            <button className='btn btn-primary' onClick={() => navigateToServiceDetail(id)}>Book Now</button>
        </div>
    );
};

export default Service;