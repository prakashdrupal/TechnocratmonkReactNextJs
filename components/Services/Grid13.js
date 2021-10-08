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
                                <h2 className="pt-4">Technocrat Monk Course Overview</h2>
                                <p className="pt-3 w-100">OThis course has been designed for those with no prior knowledge of search engine optimization (SEO). Get ready to become a SEO expert.</p>

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
