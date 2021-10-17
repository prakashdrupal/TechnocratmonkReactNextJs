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
                                <h2 className="pt-4">Link Building:</h2>
                                <p className="pt-3">Earning backlinks to your website from genuine, high-quality websites is the single biggest way to rank higher in Google. However, it is quite a tall order to produce link-worthy content and get it published on such sites.</p>
 <p>That’s where we come in. Our time-tested outreach tactics will ensure you build a healthy link profile that results in high rankings.
                                </p>
                                <h5>What You’ll Get</h5>
                                <p>•	Custom, result-oriented link building strategy</p>
                                <p>•	Quality backlinks acquired from high authority websites</p>
                                <p>•	Tangible increase in rankings and domain authority</p>
                                <p>•	Increase in the online visibility of your brand </p>


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
