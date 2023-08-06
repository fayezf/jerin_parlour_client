import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2 className='text-3xl text-center uppercase font-semibold my-4'>Get in <span className='text-[#F63E7B]'>touch</span></h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odit veritatis repellat iusto expedita est hic ratione quas nemo maiores,<br /> consequuntur enim repudiandae reiciendis rem libero totam minima molestias nam.</p>
            <div className='md:flex justify-center text-center gap-20 my-12'>
                <div>
                    <div className='flex gap-2'>
                        <FaLocationArrow className='text-2xl'></FaLocationArrow>
                        <div>
                            <h2 className='uppercase font-bold text-slate-400'>Our Location</h2>
                            <p className='font-light'>3481 New York, USA</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-8'>
                        <FaPhoneAlt className='text-2xl'></FaPhoneAlt>
                        <div>
                            <h2 className='uppercase font-bold text-slate-400'>Call us on</h2>
                            <p className='font-light'>(+1) 517 397 7100 <br /> (+1) 517 397 7100</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-8'>
                        <FaEnvelope className='text-2xl'></FaEnvelope>
                        <div>
                            <h2 className='uppercase font-bold text-slate-400'>Email address</h2>
                            <p className='font-light'>riaz@m.com <br /> admin@jerin.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex gap-4'>
                            <div className="form-control w-full mb-4">
                                <input type="text" placeholder="Full Name"
                                    {...register("name", { required: true, maxLength: 120 })}
                                    className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <input type="email" placeholder="Your Email"
                                    {...register("email", { required: true, maxLength: 120 })}
                                    className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <input type="tel" {...register("phone", { required: true })} placeholder="Your Phone" className="input input-bordered w-1/2 " />
                        </div>
                        <div className="form-control mt-4">
                            <textarea {...register("message", { required: true })} className="textarea textarea-bordered w-full h-24" placeholder="Your Message"></textarea>
                        </div>
                        <div className='text-center mt-8'>
                            <input className='btn btn-sm mt-4 bg-[#F63E7B] text-white' type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;