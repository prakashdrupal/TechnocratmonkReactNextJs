// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';

const FooterStyleOne = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Link href="/">
                            <a className="logo">
                                <img src="/images/footer-logo.png" width="200" height="70" alt="logo" />
                            </a>
                        </Link>

                        <ul className="social-links">
                            <li>
                                <a href="https://www.facebook.com/technocratmonk" target="_blank">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/technocratmonk" target="_blank">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/technocratmonk/" target="_blank">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </li>
                           
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/services">
                                    <a className="nav-link">Services</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Support</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/privacy-policy">
                                    <a className="nav-link">Privacy Policy</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/faq">
                                    <a className="nav-link">FAQ's</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Contact</a>
                                </Link>
                            </li>
                        </ul>

                        <p className="copyright">Copyright &copy; {currentYear} <strong>Texap</strong>. All Rights Reserved by <a href="https://www.technocratmonk.com/" target="_blank">Technocratmonk</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterStyleOne;