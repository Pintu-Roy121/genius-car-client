import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='text-center my-20'>
            <p className='text-xl font-bold text-center text-[#FF3811]'>Popular Products</p>
            <h1 className='text-5xl font-bold text-center'>Browse Our Products</h1>
            <p className='w-1/2 mx-auto my-5 text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <ProductsCard
                        key={product.product_id}
                        product={product}
                    ></ProductsCard>)
                }
            </div>
            <button className='btn btn-outline border-2 border-orange-600 my-12 font-semibold text-lg text-orange-600'>More Services</button>
        </div>
    );
};

export default Products;