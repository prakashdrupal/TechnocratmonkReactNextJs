import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Grid1() {
    return (
        <div className="grid_container my-0 py-5 float-start w-100">
            <div className="container">
                <div className="row align-items-center">
                   
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="banner-content ">
                                <h2 className="pt-4">Pay Only When You Get Results after Attracting Your Customers :</h2>
                                <p className="pt-3">PPC is so far one of the best marketing way for businesses. This enhances the chances of reaching more number of potential clients and allows you to pay only when someone clicks on your ad. This ensures staying within the budget while acquiring desirable results. With our analysis, we get a detailed report on the performance and then optimize it as required. Our use of Custom Ads scripts ensures creating dynamic campaigns</p>

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
