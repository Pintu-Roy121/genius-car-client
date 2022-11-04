import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='text-center'>
            <div className='text-center my-24'>
                <p className="text-2xl font-bold text-orange-500">Services</p>
                <h1 className='text-5xl font-bold my-5'>Our Service Area</h1>
                <p className='text-lg w-1/2 mx-auto '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={(service.service_id)}
                        service={service}
                    ></ServiceCard>
                    )
                }
            </div>
            <button className='btn btn-outline border-2 border-orange-600 my-12 font-semibold text-lg text-orange-600'>More Services</button>
        </div>
    );
};

export default Services;