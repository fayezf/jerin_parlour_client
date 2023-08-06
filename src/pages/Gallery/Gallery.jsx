import React from 'react';
import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/gallery/img1.jpg';
import img2 from '../../assets/gallery/img2.jpg';
import img3 from '../../assets/gallery/img3.jpg';
import img4 from '../../assets/gallery/img4.jpg';
import img5 from '../../assets/gallery/img5.jpg';
import img6 from '../../assets/gallery/img6.jpg';
import img7 from '../../assets/gallery/img7.jpg';
import img8 from '../../assets/gallery/img8.jpg';
import Features from '../Shared/Features/Features';

const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Jerins Parlour | Gallery</title>
            </Helmet>
            <h2 className='text-3xl text-center uppercase font-semibold my-4'>Jerin's <span className='text-[#F63E7B]'>Gallery</span></h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam omnis tempore et aliquid maxime quasi vitae illum saepe, <br /> rerum doloribus voluptates dolorem, temporibus ad fugit perferendis alias! Dolores, suscipit!</p>
            <div className='grid md:grid-cols-4 mt-8'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
            </div>
            <Features></Features>
        </div>
    );
};

export default Gallery;