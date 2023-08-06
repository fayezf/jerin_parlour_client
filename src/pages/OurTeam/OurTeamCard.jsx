import React from 'react';

const OurTeamCard = ({ team }) => {
    const { name, jobCategory, image } = team;
    return (
        <div className='my-8'>
            <div className="card w-80 h-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img style={{ width: '200px' }} src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-medium'><span>{jobCategory}</span></p>
                </div>
            </div>
        </div>
    );
};

export default OurTeamCard;