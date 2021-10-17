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
                                <h2 className="pt-4">YouTube Video Optimization</h2>
                                <p>Optimizing the current videos present on your channel has a lot to do on your promotional strategy. We have a strong and knowledgeable YouTube SEO team, who can place the contents in a way that it gets easily tracked.</p>
                                <p>After proper and in-depth research made by the team, we execute them to acquire great results. For more information, you can directly talk to us today.</p>

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
