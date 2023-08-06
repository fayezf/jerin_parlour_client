import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold text-center'>Let us handle your <br />
                project, professionally.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-4'>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input type="email" placeholder="Your Email"
                            {...register("email", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Phone Number</span>
                    </label>
                    <input type="tel" {...register("phone", { required: true })} placeholder="Your Phone" className="input input-bordered w-1/2 " />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea {...register("message", { required: true })} className="textarea textarea-bordered w-1/2 h-24" placeholder="Your Message"></textarea>
                </div>
                <div className='text-center'>
                    <input className='btn btn-sm mt-4 bg-[#F63E7B] text-white' type="submit" value="Send Message" />
                </div>
            </form>
        </div>
    );
};

export default Contact;