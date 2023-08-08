import React from 'react';
import banner from '../../../../assets/images/banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-orange-50 flex items-center justify-center">
            <div className="hero-content flex-col md:flex-row-reverse space-x-12">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-semibold">BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p className="py-6 font-extralight text-2xl">Grow up your skin,<br /> With the power of<br /> natural product. </p>
                    <Link to="/contact" className="btn btn-xl bg-[#F63E7B] text-white">Get on Appointment</Link>
                </div>
            </div>
        </div>

    );
};

export default Banner;