import React from 'react';
import ServicesCard from './ServicesCard';
import { Link } from 'react-router-dom';
import useServices from '../../../../hooks/useServices';

const Services = () => {
    const [services] = useServices();

    return (
        <div className='my-8 flex flex-col items-center'>
            <h2 className='text-2xl font-bold'>Our Awesome <span className='text-2xl font-bold text-[#F63E7B]'>Services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
                {
                    services?.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center mt-4'>
                <Link to="/gallery" className='btn text-white bg-[#F63E7B]'>Explore more</Link>
            </div>
        </div>

    );
};

export default Services;