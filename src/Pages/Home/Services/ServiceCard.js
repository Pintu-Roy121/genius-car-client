import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-3">
            <figure><img className='h-60 w-full rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl font-semibold text-orange-600 text-left'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <FaArrowRight className='text-xl text-orange-600 hover:text-2xl duration-500 cursor-pointer' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;