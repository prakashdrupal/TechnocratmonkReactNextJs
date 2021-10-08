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
                                <h2 className="pt-4">YouTube Video Promotion</h2>
                                <p className="pt-3">We help in making proper promotion in order to reach the audience. Even if you want or ever wish to market the videos on YouTube or On Facebook, we take this step in order
                                 to easily reach the targeted market. We find out a great way with our research works to reach the targeted niche and accomplish your business goals as fast as you can. We being the top YouTube video marketing company in India can help you by giving new ideas regarding the videos that can be effectual for your channel. All you need is pre-planning in order to boost the customer base, views, and engagement. We make sure that your brand becomes a brand by creating appealing videos.
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
