import React from 'react';
import { Helmet } from 'react-helmet-async';
import useProduct from '../../../hooks/useProduct';
import useAuth from '../../../hooks/useAuth';
import { FaCreditCard } from 'react-icons/fa';

const OrderList = () => {
    const [products] = useProduct();
    const { user, loading } = useAuth();
    return (
        <div className='md:w-full px-10 mt-16'>
            <Helmet>
                <title>Jerins Parlour | Order List</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center mb-8'>Order List</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Email Id</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(item => <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{user?.email}</td>
                                <td>Credit Card</td>
                                <td>
                                    <select className="select w-full outline-none max-w-xs">
                                        <option>Pending</option>
                                        <option>Done</option>
                                        <option>On going</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;