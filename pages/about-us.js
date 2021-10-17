import React from 'react'
import Head from 'next/head'
import NavbarStyle from '@/components/_App/NavbarStyle'
import PageBannerStyle2 from '@/components/Common/PageBannerStyle2'
// import AppProgressStyle4 from '@/components/Common/AppProgressStyle4'
// import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import FunfactStyleTwo from '@/components/Common/FunfactStyleTwo'
import ClientFeedbackStyle5 from '@/components/Feedbacks/ClientFeedbackStyle5'
import IntroVideo from '@/components/Common/IntroVideo'
// import TeamMemberStyle2 from '@/components/Common/TeamMemberStyle2'
// import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations'
import PartnerStyle3 from '@/components/Common/PartnerStyle3'
import FooterStyle from '@/components/_App/FooterStyle'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutModern = () => {
    return (
        <>  
            <Head>
                <title>About Us #Technocrat Monk</title>
                <meta name="description" content="About Us #Technocrat Monk" />
                <meta property="og:title" content="About Us #Technocrat Monk" />
                <meta property="og:description" content="About Us #Technocrat Monk" />
                <meta property="og:url" content="https://myclothingstore.com/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarStyle /> 

            <PageBannerStyle2 
                pageTitle="About Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About Us"
            />

            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">ABOUT US</span>
                                <h2>We’re Your Partner in Your Success</h2>
                                <p>Technocrat Monk is global Delhi based digital marketing agency. In case, if you need a digital marketing company, consider us. We are squad of marketing, design and development junkies who skipped the evolution to reach here first.</p>
                                <p>We don’t sell creativity; we help spread it. Throw in bright, colourful ideas to your business campaigns and reach out to the hearts of millions. Scratch that, billions!</p>

                                <p>With an experienced website development team and offbeat digital marketing strategies, we have many aces up our sleeves to deliver the A to Z of digital solutions to get the ball rolling on your business.</p>
                                
{/*                                 
                                <div className="btn-box">
                                    <Link href="https://play.google.com/store/apps">
                                        <a className="default-btn">Start Free Trial</a>
                                    </Link>
                                    <Link href="/features">
                                        <a className="link-btn">See All Features</a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <ScrollAnimation animateIn='fadeInUp'>
                                    <img src="/images/app/app-img8.png" alt="about" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <AppProgressStyle4 />

            <AppDownloadStyle1 /> */}

            <FunfactStyleTwo />

            {/* <ClientFeedbackStyle5 /> */}

            <div className="pt-100">
                <IntroVideo />
            </div>

            {/* <TeamMemberStyle2 /> */}

            <PartnerStyle3 />

            {/* <SoftwareIntegrations /> */}

            <FooterStyle />
        </>
    )
}

export default AboutModern;