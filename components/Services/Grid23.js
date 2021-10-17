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
                                <h2 className="pt-4">Local SEO:</h2>
                                <p>Get this — 46% of all Google searches are looking for local information, and over 28% of local searches become purchases.<br/>
But that’s not it — 92% of searchers will pick businesses on the first page of local search results. So, it’s time to put your business on the map. Our competent local SEO team will get you in front of the right customers at the right time.
</p>
                             <h5> What You’ll Get</h5>
                             <p>•	Complete Google My Business setup</p>
                             <p>•	NAP optimization strategy & execution</p>
                             <p>•	Local content and links strategy & execution</p>
                             <p>•	Well-optimized and improved website from Local SEO stand-point</p>


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
