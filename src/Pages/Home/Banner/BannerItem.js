import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './BannerItem.css'

const BannerItem = ({ slide }) => {

    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item w-full relative">
            <div className='carousel-image'>
                <img className="h-full w-screen object-cover rounded-lg" src={image} alt='' />
            </div>
            <div className="w-2/5 absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-7xl font-bold text-white'>Affordable Price For Car Servicing</h1>
            </div>
            <div className="w-2/5 absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="w-2/5 absolute flex justify-start transform -translate-y-1/2 left-24 top-2/3">
                <button className="btn rounded-lg btn-warning mr-6">Discover More</button>
                <button className="btn rounded-lg btn-outline btn-warning">Latest Projects</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-8">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5"><FaArrowLeft className='text-2xl bg-none text-warning' /></a>
                <a href={`#slide${next}`} className="btn btn-circle"><FaArrowRight className='text-2xl bg-none text-warning' /></a>
            </div>
        </div>
    );
};

export default BannerItem;