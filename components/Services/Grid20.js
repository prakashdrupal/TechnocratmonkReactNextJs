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
                                <h2 className="pt-4">How Technocrat Monk Can Help? </h2>
                                <h4>SEO Audit:</h4>
                                <p className="pt-3">Need a clear and actionable SEO audit of your site? We will perform an in-depth audit of every single SEO aspect of your website to focus on organic search presence and provide you with clear steps to correct and improve your site’s search friendliness.
                                </p>
                                <h4> What You’ll Get </h4>
<p>•	Technical and on-site SEO analysis & feedback</p>
<p>•	Backlink profile audit & management</p>
<p>•	Content improvement suggestions and new ideas for Content</p>
<p>•	Competitor and traffic analysis</p>


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
