import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
        <>
            <div className="features-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="features-content">
                                <span className="sub-title">KEY FEATURES</span>
                                <h2>Latest SEO Trends:</h2>
                                {/* <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want chance its just began.</p> */}
                                <p>•	Helped dozens of businesses build<br/>
•	referral and search engine traffic,<br/>
•	Transforming them into revered brands.
</p>
                                <div className="btn-box">
                                    <Link href="/sign-in">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features-2">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="features-lists">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-eye-line"></i>
                                        </div>
                                        <h3>Industry Experience</h3>
                                        <p>12+ years of hands-on industry experience.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg2">
                                            <i className="ri-stack-line"></i>
                                        </div>
                                        <h3>Relationship with Brands</h3>
                                        <p>100+ trust-based relationships established with publications over a decade.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg5">
                                            <i className="ri-cloud-line"></i>
                                        </div>
                                        <h3>Content Marketing That Helps</h3>
                                        <p>Bespoke content marketing for a clearly defined human audience & optimized for search engines.</p>
                                    </li>
                                    <li>
                                        <div className="icon bg3">
                                            <i className="ri-leaf-line"></i>
                                        </div>
                                        <h3>Digital PR</h3>
                                        <p>Create links and mentions from industry-leading websites and publications. That’s help in branding.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;