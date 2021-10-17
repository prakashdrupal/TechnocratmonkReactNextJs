import React from 'react'
import NavbarStyle from '@/components/_App/NavbarStyle'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import KeyFeatures4 from '@/components/Services/KeyFeatures4'
import FooterStyle from '@/components/_App/FooterStyle' 
 import Servicesvideo5 from '@/components/Services/servicesVideo5'
 import Grid24 from '@/components/Services/Grid24'
 import Grid25 from '@/components/Services/Grid25'
 import Grid26 from '@/components/Services/Grid26'
import Grid27 from '@/components/Services/Grid27'
 import PartnerStyle1 from '@/components/Common/PartnerStyle1'
const Services = () => {
    return (
        <>
            <NavbarStyle /> 

            <PageBannerStyle1 
                pageTitle="Youtube Video Marketing"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Youtube Video Marketing"
            />

            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>YouTube Channel Audit</h3>
                                <p>Optimize Youtube channel with Content and targeted Tags</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>YouTube Video Optimization</h3>
                                <p>Optimize Youtube to generate organic views and Subscribers</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>YouTube Video Promotion</h3>
                                <p>Promote Youtube Videos through Google Ads for getting more views</p>
                            </div>
                        </div>

                     
                 
                    </div>
                </div>
            </div>
<Servicesvideo5/>
<PartnerStyle1/>
<Grid24/>
<Grid25/>
<Grid26/>
<Grid27/>


            <KeyFeatures4 />

            {/* <div className="ptb-100">
                <AppDownloadStyle1 />
            </div> */}
 
            <FooterStyle />
        </>
    )
}

export default Services;