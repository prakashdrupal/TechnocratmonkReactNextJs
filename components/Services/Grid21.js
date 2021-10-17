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
                                <h2 className="pt-4">Technical SEO:</h2>
                                <p>Dealing with code and technical stuff can be daunting. But that’s no excuse to miss out on high rankings and lucrative traffic. Leave it to our proficient technical SEO team to take care of the technical aspects of getting your website on top of Google search results.</p>  
                                <h5>What You’ll Achieve</h5>
                                <p>  •	Setup monitoring and management of Google Analytics and Search Console </p>
                                <p>•	Actionable recommendations on boosting site speed, sitemap and robots.txt file corrections</p>
                                <p>•	Monthly audit reports on website crawlability, indexability, on-page, and off-page factors</p>
                                <p>•	Detailed recommendations to improve your website from technical SEO stand-point</p>


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
