import React from 'react';
import natural from '../../assets/images/natural.jpg';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className='my-12'>
            <Helmet>
                <title>Jerins Parlour | About</title>
            </Helmet>
            <div className='md:flex justify-center gap-8'>
                <img style={{ width: '600px', marginLeft: '20px' }} src={natural} alt="" />
                <div>
                    <h2 className='text-3xl font-semibold mb-2'>About Our <span className='text-[#F63E7B]'>Jerin's</span></h2>
                    <hr />
                    <p className='text-justify p-4'>Welcome to Jerins Parlour, where beauty meets relaxation. Our team of skilled professionals is dedicated to providing top-notch hair, nail, and skincare services that leave you feeling rejuvenated and confident. With a commitment to using premium products and delivering personalized experiences, we ensure that every visit is a delightful escape from the everyday. Discover the perfect blend of expertise and pampering at Jerins Parlour.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;