import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import About from './About/About';
import Testimonials from './Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Jerins Parlour | Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;