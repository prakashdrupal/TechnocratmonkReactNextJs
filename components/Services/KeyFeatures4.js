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
                                <h2>Technocrat Monk's SEO services</h2>
                                <p>Technocrat Monk is known for rendering reliable SEO services. Our SEO specialists and experts strive to deliver optimal business profits to you by giving proper exposure to your websites on the Internet.</p>
                               
                            </div>
                        </div>
                        
                        <div className="col-lg-8 col-md-12">
                            <div className="features-lists">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-eye-line"></i>
                                        </div>
                                        <h3>Organic Traffic </h3>
                                        <p>A website that is optimized using our best SEO techniques surely lands on top most position after being searched by users.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg2">
                                            <i className="ri-stack-line"></i>
                                        </div>
                                        <h3>Improved Leads and Conversion in Sales </h3>
                                        <p>Our SEO techniques help in converting valuable leads and organic traffic for more business resulting in paying customers for you.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg5">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Better Website Usability </h3>
                                        <p>Optimizing the website, makes it easier for search engine to navigate and give exact result to the searchers.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg3">
                                            <i className="ri-leaf-line"></i>
                                        </div>
                                        <h3>Brand Awareness</h3>
                                        <p>It helps you in gaining users trust and makes your website more popular among the audience as it is appearing on the landing page of most of the search engines.</p>
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