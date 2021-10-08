import React from 'react'
import NavbarStyle from '@/components/_App/NavbarStyle'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import KeyFeatures1 from '@/components/Services/KeyFeatures1'
import FooterStyle from '@/components/_App/FooterStyle' 
 import Servicesvideo from '@/components/Home/IntroVideo'
 import Grid1 from '@/components/Services/Grid1'
 import Grid2 from '@/components/Services/Grid2'
 import Grid3 from '@/components/Services/Grid3'
 import PartnerStyle1 from '@/components/Common/PartnerStyle1'
const Services = () => {
    return (
        <>
            <NavbarStyle /> 

            <PageBannerStyle1 
                pageTitle="Digital Marketing Company"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Digital Marketing Company"
            />

            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>Search Engine Optimization</h3>
                                <p>Enhance your online presence and divert more yet relevant traffic to your business website with our customized SEO strategies and services.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>Social Media Marketing</h3>
                                <p>Engage your targeted audience more creatively and spread your brand awareness by opting for our effective social media marketing services</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Pay Per Click Ads</h3>
                                <p>Significantly increase your revenue and grow your business with our expertly designed and result-oriented PPC campaigns</p>
                            </div>
                        </div>

                     
                 
                    </div>
                </div>
            </div>
            <Servicesvideo/>
            <PartnerStyle1/>
            <Grid1/>
            <Grid2/>
            <Grid3/>
            <KeyFeatures1 />

            {/* <div className="ptb-100">
                <AppDownloadStyle1 />
            </div> */}
 
            <FooterStyle />
        </>
    )
}

export default Services;