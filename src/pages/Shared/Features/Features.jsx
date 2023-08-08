import React from 'react';
import FeaturesCard from './FeaturesCard';
import useFeatures from '../../../hooks/useFeatures';

const Features = () => {
    const [features] = useFeatures()
    return (
        <div className='mt-8 flex flex-col items-center'>
            <div>
                <h2 className='text-3xl text-center uppercase font-semibold my-4'>Jerin's <span className='text-[#F63E7B]'>Features</span></h2>
                <p className='text-center'>At Jerins Parlour, we offer a range of exceptional beauty services designed to enhance your natural radiance. <br /> Indulge in expert hairstyling, precision nail care, and luxurious skincare treatments. Our skilled team uses the <br /> finest products, ensuring quality and long-lasting results.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
                {
                    features?.map(item => <FeaturesCard
                        key={item._id}
                        item={item}
                    ></FeaturesCard>)
                }
            </div>
        </div>

    );
};

export default Features;