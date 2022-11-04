import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Order from './Order';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }

                return res.json();
            })
            .then(data => {
                setOrders(data)
            });
    }, [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete this service?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-Token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Order Delete Successfully')
                        const reamining = orders.filter(odr => odr._id !== id);
                        setOrders(reamining);
                    }
                })
        }

    }

    const handleUpdateOrders = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-Token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                const remaing = orders.filter(order => order._id !== id);
                const approved = orders.find(order => order._id === id);
                approved.status = 'Approved'
                const newOrders = [approved, ...remaing];
                setOrders(newOrders);
            })
    }

    return (
        <div>
            <h1 className="text-5xl font-bold">Total: {orders?.length ? orders.length : "No Orders"}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Order
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdateOrders={handleUpdateOrders}
                            ></Order>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Orders;