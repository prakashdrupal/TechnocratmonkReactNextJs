import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const AppProgressStyle2 = () => {
    return (
        <>
            <div className="app-progress-area bg-black ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-animation-image">
                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInDown' duration={2}>
                                        <img src="/images/app-progress/app-progress1.png" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInRight' duration={2}>
                                        <img src="/images/app-progress/app-progress2.png" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInLeft' duration={2}>
                                        <img src="/images/app-progress/app-progress3.png" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img">
                                    <ScrollAnimation animateIn='fadeInUp' duration={2}>
                                        <img src="/images/app-progress/app-progress4.png" alt="app-progress" />
                                    </ScrollAnimation>
                                </div>

                                <div className="app-img main-image">
                                    <img src="/images/app-progress/progress-main.png" alt="app-progress" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-content text-white">
                                 {/* <span className="sub-title">APP PROGRESS</span> */}
                                <h2>We Lead from the Front</h2>
                                <p>It’s time to rocket your brand online hence you should modernize your outlook. We can surely enhance your business and boost the conversion rate of your customers into quality leads. With our excellent search engine and social approaches, we optimize your websites and give you comprehensive results.</p>
                                
                                
                                <Link href="/sign-in">
                                    <a className="default-btn">Start Free Trial</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppProgressStyle2;