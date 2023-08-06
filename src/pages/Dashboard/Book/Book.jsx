import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Book = () => {
    const {id} = useParams();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        data.productItemId = id;


        fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            window.location.replace(result.url)
            console.log(result)
        })

    };

    return (
        <div className='md:w-full px-10 mt-16'>
            <Helmet>
                <title>Jerins Parlour | My Book</title>
            </Helmet>
            <div>
                <h2 className='text-2xl'>My Book</h2>
                <div className='mt-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name", { required: true, maxLength: 120 })} placeholder="Your Name" className="input border-transparent bg-white w-full max-w-xs" />
                        <br />
                        <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input border-transparent bg-white w-full mt-4 max-w-xs" />
                        <br />
                        <input type="text" {...register("product", { required: true, maxLength: 120 })} placeholder="Product Name" className="input border-transparent bg-white w-full mt-4 max-w-xs" />
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Pay with</span>
                            </label>
                            <select defaultValue="Pay with" {...register("currency", { required: true })} className="select bg-white select-bordered">
                                <option>BDT</option>
                                <option>USD</option>
                                <option>Paypal</option>
                            </select>
                        </div>
                        <input className='btn btn-sm mt-4 bg-[#F63E7B] text-white' type="submit" value="Pay" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;