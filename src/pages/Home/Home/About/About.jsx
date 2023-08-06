import React from 'react';
import about from '../../../../assets/images/about.png';

const About = () => {
    return (
        <div className='my-8'>
            <div className="hero bg-orange-50 flex items-center justify-center">
                <div className="hero-content flex-col lg:flex-row items-center">
                    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-20 text-center lg:text-left'>
                        <h1 className="text-4xl font-bold">Let us handle your <br />
                            screen <span className='text-[#F63E7B]'>Professionally</span>.
                        </h1>
                        <p className="py-6 px-1">With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum. <br />Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.</p>
                        <div className='flex gap-4 justify-center lg:justify-start'>
                            <div>
                                <p className='text-[#F63E7B] text-2xl font-bold'>500+</p>
                                <p className='font-normal'>Happy Customer</p>
                            </div>
                            <div>
                                <p className='text-[#F63E7B] text-2xl font-bold'>16+</p>
                                <p className='font-normal'>Total Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;