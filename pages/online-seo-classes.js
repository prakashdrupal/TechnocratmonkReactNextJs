import React from 'react'
import NavbarStyle from '@/components/_App/NavbarStyle'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import KeyFeatures2 from '@/components/Services/KeyFeatures2'
import FooterStyle from '@/components/_App/FooterStyle' 
 import Servicesvideo3 from '@/components/Services/servicesVideo3'
 import Grid12 from '@/components/Services/Grid12'
 import Grid13 from '@/components/Services/Grid13'
 import Grid14 from '@/components/Services/Grid14'
 import Grid15 from '@/components/Services/Grid15'
 import Grid16 from '@/components/Services/Grid16'
 import Grid17 from '@/components/Services/Grid17'
 import Grid18 from '@/components/Services/Grid18'
 import Grid19 from '@/components/Services/Grid19'
 import PartnerStyle1 from '@/components/Common/PartnerStyle1'
const Services = () => {
    return (
        <>
            <NavbarStyle /> 

            <PageBannerStyle1 
                pageTitle="Online Seo Classes"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Online Seo Classes"
            />

            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>Free Trial</h3>
                                <p>Start learning today - free 3-day trial</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>World Class Learning</h3>
                                <p>World-class learning with Technocrat Monk</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Build Own Business</h3>
                                <p>Helps in builds a remarkable strategy for your business</p>
                            </div>
                        </div>

                     
                 
                    </div>
                </div>
            </div>
<Servicesvideo3/>
<PartnerStyle1/>
<Grid12/>
<Grid13/>
<Grid14/>
<Grid15/>
<Grid16/>
<Grid17/>
<Grid18/>
<Grid19/>
            <KeyFeatures2 />

            {/* <div className="ptb-100">
                <AppDownloadStyle1 />
            </div> */}
 
            <FooterStyle />
        </>
    )
}

export default Services;