import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, price, _id } = useLoaderData();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handlePlaceOrder = event => {
        event.preventDefault();

        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || undefined;
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-Token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order place succefully');
                    form.reset();
                    navigate('/')
                }
            })
            .catch(error => console.log(error));



    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder} className='bg-gray-300 p-24 rounded-lg text-center'>
                <h1 className='text-3xl font-bold text-center'>Your are about to Order: <span className='text-orange-600 underline'>{title}</span></h1>
                <h1 className='text-2xl font-bold text-center text-orange-600'>Price: ${price}</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-4'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered input-info w-full" required />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-info w-full" />
                    <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-info w-full" required />
                    <input type="text" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered input-info w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-info h-32 w-full my-5" placeholder="Message"></textarea>
                <input type="submit" value="Place Your Order" className='btn btn-info font-bold' />
            </form>
        </div>
    );
};

export default Checkout;