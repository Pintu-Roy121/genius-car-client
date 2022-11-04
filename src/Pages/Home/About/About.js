import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-22">
            <div className="hero-content p-0 flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="rounded-lg shadow-2xl w-4/5" alt='' />
                    <img src={parts} className="rounded-lg shadow-2xl w-1/2 absolute right-12 -bottom-14 border-8 border-white" alt='' />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-2xl font-bold text-orange-600'>About Us</h1>
                    <h1 className="text-5xl font-bold w-3/4 mt-2">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-6 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-justify'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-orange-600 border-none mt-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;