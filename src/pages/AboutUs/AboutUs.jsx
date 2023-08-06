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
                    <p className='text-justify p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias asperiores architecto expedita at, aspernatur illum id, culpa voluptate eligendi dolorem deleniti ex harum, saepe tempora rem exercitationem est amet hic autem ipsa repudiandae temporibus ad dolores odio! Esse repellat dolorum rerum laborum odit. Labore, beatae iusto exercitationem, rem totam ullam iste quasi, consequuntur laborum sunt repellendus autem facilis cupiditate iure ipsa! At debitis dignissimos consequatur accusamus eveniet perspiciatis qui voluptates sint laudantium. Dolorem inventore iusto deleniti excepturi cumque quas quibusdam itaque, ipsum maxime fuga. Sed et eos ratione quod rerum nulla eum temporibus consequatur, omnis quo optio maxime laborum dolor.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;