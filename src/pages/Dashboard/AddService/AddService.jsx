import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddService = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, description } = data;
                    const newItem = { name, description, price: parseFloat(price), image: imgURL }
                    axiosSecure.post('/features', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Product added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className='md:w-full px-10 mt-16'>
            <Helmet>
                <title>Jerins Parlour | Add Service</title>
            </Helmet>
            <h2 className='text-3xl text-center mb-8 uppercase font-bold'>Add an Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Service Title*</span>
                        </label>
                        <input type="text" placeholder="Enter Title"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Service Image*</span>
                        </label>
                        <input type="file"
                            {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="text" placeholder="Price"
                        {...register("price", { required: true })}
                        className="input input-bordered w-1/3" />
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-1/3 h-28" placeholder="Enter Description"></textarea>
                </div>
                <input className='btn btn-sm mt-4 bg-[#F63E7B] text-white' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;