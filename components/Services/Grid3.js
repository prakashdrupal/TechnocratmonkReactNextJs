import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Grid1() {
    return (
        <div className="grid_container my-5 py-5 float-start w-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="grid_img "  >
                    <ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true} initiallyVisible={true}>
                    <img src="/images/phone-15.png" alt="image" />
                    </ScrollAnimation>
                    </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="banner-content ">
                                <h2 className="pt-4">PPC Platforms Majorly Used By Us:</h2>
                                <p className="pt-3">Google Ads Platforms:</p>
                                
                                <ul>
                               <li>YouTube</li>
                               <li>App Installation Ads</li>
                               <li>Promotions with Google Sponsors</li>
                               <li>Google Shopping</li>
                               <li>Search Marketing</li>
                               <li>Dynamic Remarketing</li>

                                </ul>
                                
                                

                                <Link href="/">
                                    <a className="default-btn">Start Free Trial</a>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
