import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Grid1() {
    return (
        <div className="grid_container my-0 py-5 float-start w-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="grid_img "  >
                    <ScrollAnimation animateIn='fadeInDown' duration={2} animateOnce={true} initiallyVisible={true}>
                    <img src="/images/phone-14.png" alt="image" />
                    </ScrollAnimation>
                    </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="banner-content ">
                                <h2 className="pt-4">Getting Started with Our Experts</h2>
                                <p className="pt-3">Our SEO course is suitable for anyone who is interested in building technical search engine optimization (SEO) skills. It is suitable for anyone thinking about a great career in SEO or wants to start an SEO agency, If you have your business and want to expand online or would like to understand how to improve its website ranking on Search Engine or if you are a digital marketer keen to improve your understanding of search engine optimization, this course will help.</p>

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
