import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductsCard = ({ product }) => {
    // console.log(product);
    const { product_img, title, price } = product;
    return (
        <div className="card text-center card-compact bg-base-100 shadow-xl p-3">
            <figure><img className='h-80 bg-gray-100 w-full p-2 rounded-lg' src={product_img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <div className='flex mx-auto gap-1'>
                    <FaStar className='text-[#FF3811] text-xl' />
                    <FaStar className='text-[#FF3811] text-xl' />
                    <FaStar className='text-[#FF3811] text-xl' />
                    <FaStar className='text-[#FF3811] text-xl' />
                    <FaStar className='text-[#FF3811] text-xl' />
                </div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className='text-2xl font-bold text-[#FF3811]'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductsCard;