import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold text-center'>Testimonials</h2>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex flex-col items-center mx-24 my-16'>
                            <div className='flex justify-center items-center gap-x-4'>
                                <img style={{width: '120px'}} src={review.image} alt="" />
                                <div>
                                    <h3 className="text-2xl font-bold">{review.name}</h3>
                                    <h3 className=''>{review.companyPosition}</h3>
                                </div>
                            </div>
                            <p className='py-4 '>{review.description}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;