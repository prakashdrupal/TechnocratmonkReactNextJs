import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Link from 'next/link';

const IntroVideo = () => {

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="video-area ptb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="intro-video-content">
+                                <h2>Build Your SEO Knowledge</h2>
                                <p>Today, our lives shift online, good search engine optimization (SEO) is increasingly central to success in the modern business era. That the reason the SEO industry is booming: Forbes estimate is worth more than $80 billion. This search engine optimization (SEO) has been designed to help you become part of this thriving industry by teaching you how to become SEO expert. Our SEO courses are delivered online. You could be living anywhere in Delhi, Gurgaon, Bangalore, Mumbai, Chennai, Hyderabad, Noida, Pune, Kolkata, etc in India and you would still be eligible for the SEO course.</p>

                                <Link href="/contact">
                                    <a className="default-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="intro-video-box">
                                <img src="/images/video/video-img1.jpg" alt="video-img" />
        
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="ri-play-line"></i>
                                </div>

                                <div className="shape">
                                    <img className="shape10" src="/images/shape/shape13.png" alt="image" />
                                    <img className="shape11" src="/images/shape/shape14.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='65KxEe4MgqI' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default IntroVideo;