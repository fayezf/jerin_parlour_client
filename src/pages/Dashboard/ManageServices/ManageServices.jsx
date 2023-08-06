import React from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useFeatures from '../../../hooks/useFeatures';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const ManageServices = () => {
    const [features, , refetch] = useFeatures();
    const [axiosSecure] = useAxiosSecure();

    const handleUpdate = item => {

    }

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/features/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Deleted successfully',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='md:w-full mt-16 px-10'>
            <Helmet>
                <title>Jerins Parlour | Manage Services</title>
            </Helmet>
            <h2 className='text-3xl text-center mb-8 font-bold uppercase'>Manage All Services</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            features?.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleUpdate(item)} className='btn btn-ghost bg-[#F63E7B] text-white'><FaRegEdit /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className='btn btn-ghost bg-red-600 text-white'><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;