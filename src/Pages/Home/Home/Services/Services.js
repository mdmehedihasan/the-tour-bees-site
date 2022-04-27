import React, { useEffect, useState } from 'react';
import ServiceDetail from '../../../ServiceDetail/ServiceDetail';
import Service from '../Service/Service';
import "../Services/Services.css"



const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className="heading-title my-5 text-success" id='services'>Our Service</h2>
            <div className='bg-success w-100' style={{ height: '1px' }}></div>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;