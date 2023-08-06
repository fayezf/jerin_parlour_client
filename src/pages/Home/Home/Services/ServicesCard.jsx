import React from 'react';

const ServicesCard = ({ service }) => {
    const { name, price, image, description } = service;
    return (
        <div className='mt-4'>
            <div className="card w-80 h-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img style={{width: '120px'}} src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-[#F63E7B] font-medium'><span>${price}</span></p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;