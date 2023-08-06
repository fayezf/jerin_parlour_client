import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';

const FeaturesCard = ({ item }) => {
    const { name, price, image, description, _id } = item;
    const { user } = useAuth();
    const [, refetch] = useProduct()
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToProduct = item => {
        if (user && user?.email) {
            const productItem = {productItemId: _id, name, image, price, description, email: user?.email}
            fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(productItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Product added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to add to the Product',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }

    return (
        <div className='my-8'>
            <div className="card w-80 h-90 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img style={{ width: '180px' }} src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-[#F63E7B] font-medium'><span>${price}</span></p>
                    <p className='font-normal'><span>{description}</span></p>
                    <button onClick={() => handleAddToProduct(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-[#F63E7B] mt-4">Add To Product</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;