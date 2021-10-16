import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, Navigation]);

const ClientFeedbackStyle2 = () => {
    return (
        <>
            <div className="feedback-area pt-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">CLIENT REVIEWS</span>
                        <h2>What Customer Says</h2>
                    </div>

                    <Swiper 
                        effect={'cube'} 
                        grabCursor={true} 
                        cubeEffect={{
                            "shadow": true,
                            "slideShadows": true,
                            "shadowOffset": 20,
                            "shadowScale": 0.94
                        }}
                        loop={true}
                        navigation={true} 
                        className="feedback-swiper-slides mySwiper"
                    >
                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info">
                                    <img src="/images/user/user1.jpg" alt="user" />
                                    <div className="title">
                                        <h3>FunkiIndia—</h3>
                                        {/* <span>Spotify Developer</span> */}
                                    </div>
                                </div>

                                <p>Quality of SEO Service is too good as provided by technocrat monk. They first understood how my business functions and then they amended their strategy accordingly and that’s when I knew chose the right agency.</p>
                                
                                {/* <div className="rating">
                                    <h5>Theme Customization</h5>
                                    <div>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                </div> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info">
                                    <img src="/images/user/user2.jpg" alt="user" />
                                    <div className="title">
                                        <h3>Sarafa Bazar</h3>
                                        {/* <span>PHP Developer</span> */}
                                    </div>
                                </div>
                                <p>Since the implementation of technocrat monk's campaigns, we have seen a 100% increase in traffic as well as an improvement in qualified leads by over 60%. Along the way, the team was highly adaptive, versatile, and organized. Customers can expect an effective partnership.</p>
                                {/* <div className="rating">
                                    <h5>Theme Customization</h5>
                                    <div>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                    </div>
                                </div> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-feedback-item">
                                <div className="client-info">
                                    <img src="/images/user/user3.jpg" alt="user" />
                                    <div className="title">
                                        <h3>Jsonworld</h3>
                                        {/* <span>Moodle Developer</span> */}
                                    </div>
                                </div>
                                <p>Technocrat Monk delivers SEO consulting and services. We connected them for my technical blog and consultation. They increase 50x times my website traffic. I'm still working with them.</p>
                                {/* <div className="rating">
                                    <h5>Theme Customization</h5>
                                    <div>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-fill"></i>
                                        <i className="ri-star-line"></i>
                                    </div>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ClientFeedbackStyle2;