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
                                        <h3>More Video Views </h3>
                                        <p>We will drive more views to your videos through our top-quality YouTube marketing services.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg2">
                                            <i className="ri-stack-line"></i>
                                        </div>
                                        <h3>More YouTube Subscribers </h3>
                                        <p>Our YouTube marketing agency creates high-quality actionable content that drives more exposure and followers</p>
                                    </li>
                                    <li>
                                        <div className="icon bg5">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Better Branding </h3>
                                        <p>Our content helps your channel to build better branding on YouTube</p>
                                    </li>
                                    <li>
                                        <div className="icon bg3">
                                            <i className="ri-leaf-line"></i>
                                        </div>
                                        <h3>More Engagement</h3>
                                        <p>We create high-quality content to engage your audience and followers</p>
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