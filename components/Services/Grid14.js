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
                    <ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true} initiallyVisible={true}>
                    <img src="/images/phone-15.png" alt="image" />
                    </ScrollAnimation>
                    </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="banner-content ">
                                <h2 className="pt-4">SEO Overview</h2>
                                <p className="pt-3">SEO is the process of increase of your website visibility in Search Engine like Google, Yahoo, Bing, etc. and the job of an SEO expert to optimize your business and website according to requirement. There are lots of SEO checklists, we follow when we optimize website. In this online SEO classes, we learn about these entire checklist.
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
