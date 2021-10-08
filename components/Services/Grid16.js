import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Grid1() {
    return (
        <div className="grid_container my-0 py-5 float-start w-100">
            <div className="container">
                <div className="row align-items-center" >
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="grid_img "  >
                    <ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true} initiallyVisible={true}>
                    <img src="/images/phone-15.png" alt="image" />
                    </ScrollAnimation>
                    </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="banner-content ">
                                <h2 className="pt-4">Technical SEO</h2>
                                <p className="pt-3">This form of SEO deals with the backend and coding of the website. Some of the forms of technical SEO are code optimization, increase crawl budget, optimizing crawling and rendering, etc.  The technical SEO impacts the loading speed of your web pages which is a crucial ranking factor for majority of the search engines including Google.
                                </p>
                                

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
