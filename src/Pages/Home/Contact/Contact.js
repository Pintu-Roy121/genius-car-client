import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiChat } from "react-icons/hi";

const Contact = () => {
    return (
        <div className=' bg-[#151515] text-white rounded-xl py-20 px-24 flex justify-between'>
            <div className='flex items-center gap-4 relative'>
                <FaCalendarAlt className='text-4xl' />
                <FaClock className='text-[#FF3811] text-xl absolute bg-black rounded-full bottom-1 left-5' />
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-semibold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center gap-4 relative'>
                <HiChat className=' text-3xl text-[#FF3811] absolute rounded-full bottom-7 left-4' />
                <FaPhoneAlt className='text-4xl' />
                <div>
                    <p>Have a question?</p>
                    <h3 className='text-2xl font-semibold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex items-center gap-4 '>

                <FaMapMarkerAlt className='text-5xl text-[#FF3811]' />
                <div>
                    <p>Need a repair? our address</p>
                    <h3 className='text-2xl font-semibold'>Liza Street, New York</h3>
                </div>
            </div>

        </div>
    );
};

export default Contact;