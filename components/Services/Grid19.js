import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Grid1() {
    return (
        <div className="grid_container my-0 py-5 float-start w-100">
            <div className="container">
                <div className="row align-items-center">
                   
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="banner-content ml-0 w-content ">
                                <h2 className="pt-4">Tools, which you can use with us</h2>
                                <ul>
                                <li>Google Webmaster</li>
                                <li>Google Ads</li>
                                <li>Google Merchant Center</li>
                                <li>Google Analytics</li>
                                <li>Google Keyword Planner</li>
                                <li>Google Tag Manager</li>
                                <li>Ahref</li>
                                <li>Semrush</li>
                                <li>Screaming Frog</li>
                                <li>Google Trends</li>
                                </ul>

                                <Link href="/">
                                    <a className="default-btn">Start Free Trial</a>
                                </Link>
                            </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="grid_img "  >
                    <ScrollAnimation animateIn='fadeInRight' duration={2} animateOnce={true} initiallyVisible={true}>
                    <img src="/images/phone-14.png" alt="image" />
                    </ScrollAnimation>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
