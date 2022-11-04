import React, { useEffect, useState } from 'react';

const Order = ({ order, handleDelete, handleUpdateOrders }) => {
    const [orderSercice, setOrderService] = useState({});
    const { _id, serviceName, price, phone, email, service, customer, status, message } = order;

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-32 h-32">
                            <img src={orderSercice.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">{customer}</div>
                        <div className="text-lg ">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className='text-lg font-semibold'>{serviceName}</span>
                <br />
                <span className="text-lg ">{price} $</span>
            </td>
            <td>
                <div className='flex flex-col'>
                    <span className='font-bold'>{email}</span>
                    <span>{message}</span>
                </div>
            </td>
            <th>
                <button onClick={() => handleUpdateOrders(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th>
        </tr>

    );
};

export default Order;