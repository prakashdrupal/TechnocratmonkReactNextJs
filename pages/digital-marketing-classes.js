import React from 'react'
import NavbarStyle from '@/components/_App/NavbarStyle'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import KeyFeatures2 from '@/components/Services/KeyFeatures2'
import FooterStyle from '@/components/_App/FooterStyle' 
 import Servicesvideo1 from '@/components/Services/servicesVideo1'
 import Grid4 from '@/components/Services/Grid4'
 import Grid5 from '@/components/Services/Grid5'
 import Grid6 from '@/components/Services/Grid6'
 import Grid7 from '@/components/Services/Grid7'
 import Grid8 from '@/components/Services/Grid8'
 import Grid9 from '@/components/Services/Grid9'
 import Grid10 from '@/components/Services/Grid10'
 import Grid11 from '@/components/Services/Grid11'
 import PartnerStyle1 from '@/components/Common/PartnerStyle1'
const Services = () => {
    return (
        <>
            <NavbarStyle /> 

            <PageBannerStyle1 
                pageTitle="Digital Marketing Classes"
                homePageUrl="/"
                homePageText="Home"
                activePageText="SDigital Marketing Classes"
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
<Servicesvideo1/>
<PartnerStyle1/>
<Grid4/>
<Grid5/>
<Grid6/>
<Grid7/>
<Grid8/>
<Grid9/>
<Grid10/>
<Grid11/>
            <KeyFeatures2 />

            {/* <div className="ptb-100">
                <AppDownloadStyle1 />
            </div> */}
 
            <FooterStyle />
        </>
    )
}

export default Services;