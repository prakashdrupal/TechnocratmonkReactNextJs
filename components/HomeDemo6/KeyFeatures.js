import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
        <>
            <div className="features-area pb-75">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="features-content">
                                <span className="sub-title">KEY FEATURES</span>
                                <h2>Most Probably Included Best Features Ever</h2>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                                <p>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want chance its just began.</p>

                                <div className="btn-box">
                                    <Link href="/sign-in">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="list-of-features">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-6 col-md-6 xsw-100">
                                        <div className="features-item with-border">
                                            <div className="icon">
                                                <i className="ri-eye-line"></i>
                                            </div>
                                            <h3>High Resolution</h3>
                                            <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-6 col-md-6 xsw-100">
                                        <div className="features-item with-border">
                                            <div className="icon bg2">
                                                <i className="ri-stack-line"></i>
                                            </div>
                                            <h3>Retina Ready Screen</h3>
                                            <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-6 col-md-6 xsw-100">
                                        <div className="features-item with-border">
                                            <div className="icon bg3">
                                                <i className="ri-leaf-line"></i>
                                            </div>
                                            <h3>Easy Editable Data</h3>
                                            <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-6 col-md-6 xsw-100">
                                        <div className="features-item with-border">
                                            <div className="icon bg4">
                                                <i className="ri-secure-payment-line"></i>
                                            </div>
                                            <h3>Fully Secured</h3>
                                            <p>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;