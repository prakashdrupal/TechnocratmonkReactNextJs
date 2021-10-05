import React from 'react'
import NavbarStyle from '@/components/_App/NavbarStyle'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import AppScreenshotsStyle1 from '@/components/AppScreenshots/AppScreenshotsStyle1'
import AppScreenshotsStyle2 from '@/components/AppScreenshots/AppScreenshotsStyle2'
import AppScreenshotsStyle3 from '@/components/AppScreenshots/AppScreenshotsStyle3'
import AppScreenshotsStyle4 from '@/components/AppScreenshots/AppScreenshotsStyle4'
import AppScreenshotsStyle5 from '@/components/AppScreenshots/AppScreenshotsStyle5'
import AppScreenshotsStyle6 from '@/components/AppScreenshots/AppScreenshotsStyle6'
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations'
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1'
import FooterStyle from '@/components/_App/FooterStyle'
 
const Screenshots = () => {
    return (
        <>
            <NavbarStyle /> 

            <PageBannerStyle1 
                pageTitle="Screenshots"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Screenshots"
            />

            <AppScreenshotsStyle1 />

            <div className="pt-100">
                <AppScreenshotsStyle2 />
            </div>
            
            <AppScreenshotsStyle3 />

            <div className="pt-100">
                <AppScreenshotsStyle5 />
            </div>
 
            <AppScreenshotsStyle4 />

            <SoftwareIntegrations />
            
            <AppScreenshotsStyle6 />

            <div className="ptb-100">
                <AppDownloadStyle1 />
            </div>
 
            <FooterStyle />
        </>
    )
}

export default Screenshots;