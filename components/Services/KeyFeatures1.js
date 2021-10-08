import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
        <>
            <div className="features-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="features-content">
                                <span className="sub-title"></span>
                                <h2>Latest SEO Trends:</h2>
                                
                                    <ul>
                                     <li>Helped dozens of businesses build</li> 
                                     <li>Referral and search engine traffic,</li>
                                     <li>Transforming them into revered brands.</li>
                                    </ul>
                               
                            </div>
                        </div>
                        
                        <div className="col-lg-8 col-md-12">
                            <div className="features-lists">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-eye-line"></i>
                                        </div>
                                        <h3>Search Engine Optimization</h3>
                                        <p>Enhance your online presence and divert more yet relevant traffic to your business website with our customized SEO strategies and services</p>
                                    </li>
                                    <li>
                                        <div className="icon bg2">
                                            <i className="ri-stack-line"></i>
                                        </div>
                                        <h3>Social Media Marketing</h3>
                                        <p>Engage your targeted audience more creatively and spread your brand awareness by opting for our effective social media marketing services</p>
                                    </li>
                                    <li>
                                        <div className="icon bg5">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Pay Per Click Ads</h3>
                                        <p>Significantly increase your revenue and grow your business with our expertly designed and result-oriented PPC campaigns</p>
                                    </li>
                                    <li>
                                        <div className="icon bg3">
                                            <i className="ri-leaf-line"></i>
                                        </div>
                                        <h3>Display Ads</h3>
                                        <p>Grab the attention of maximum eyeballs online by displaying your brand in the right place. Avail our display advertising services to have your brand presence everywhere</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;