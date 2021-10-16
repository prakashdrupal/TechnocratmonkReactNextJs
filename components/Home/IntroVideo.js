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
            <div className="video-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="intro-video-content">
                                <span className="sub-title">INTRO VIDEO</span>
                                <h2>A Capable SEO Strategist Crew</h2>
                                <p>Digital businesses need sustained search engine traffic, strong long-term branding, and high-conversion rates if they are to thrive. That’s where a modern, forward-thinking SEO-focused content marketing agency — Technocrat Monk — comes into the picture.</p>

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
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default IntroVideo;