import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const SoftwareIntegrationsTwo = () => {
    return (
        <>
            <div className="software-integrations-area bg-gradient-color ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="software-integrations-content white-color">
                                <span className="sub-title">SOFTWARE INTEGRATIONS</span>
                                <h2>Ready to grow with a digital marketing agency you can trust? Get your free proposal today:</h2>
                                <p>Our digital marketing experts have put together thousands of successful digital marketing campaigns for businesses looking to increase leads, phone calls, transactions, and qualified website traffic. They’ll do the same for you. Request a free strategy proposal and get a game plan for elite revenue generation.</p>

                                <Link href="/contact">
                                    <a className="default-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="software-integrations-list">
                                    <img src="/images/shape/border.png" alt="border" />

                                    <ul>
                                        <li>
                                            <img src="/images/software-integrations/atlassian.png" className="atlassian" alt="atlassian" />
                                        </li>
                                        <li> 
                                            <img src="/images/software-integrations/skype.png" className="skype" alt="skype" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/gdrive.png" className="gdrive" alt="gdrive" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/slack.png" className="slack" alt="slack" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/jira.png" className="jira" alt="jira" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/frame.png" className="frame" alt="frame" />
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="shape8">
                    <img src="/images/shape/shape7.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default SoftwareIntegrationsTwo;