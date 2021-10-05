import React from 'react';
import NavbarStyle from '@/components/_App/NavbarStyle';
import MainBanner from '@/components/Home/MainBanner';
import Features from '@/components/Home/Features';
import KeyFeatures from '@/components/Home/KeyFeatures';
import AppProgressStyle2 from '@/components/Common/AppProgressStyle2';
import IntroVideo from '@/components/Home/IntroVideo';
import AppScreenshotsStyle2 from '@/components/AppScreenshots/AppScreenshotsStyle2';
import SoftwareIntegrationsTwo from '@/components/Common/SoftwareIntegrationsTwo';
import ClientFeedbackStyle2 from '@/components/Feedbacks/ClientFeedbackStyle2';
import PricingPlanStyle2 from '@/components/PricingPlan/PricingPlanStyle2';
import FreeTrialStyle2 from '@/components/Common/FreeTrialStyle2';
import PartnerStyle1 from '@/components/Common/PartnerStyle1'
import FooterStyle from '@/components/_App/FooterStyle';
 
const IndexPage2 = () => {
    return (
        <>
            <NavbarStyle /> 

            <MainBanner />

            <Features />

            <KeyFeatures />

            <AppProgressStyle2 />

            <IntroVideo />

            <AppScreenshotsStyle2 />

            <SoftwareIntegrationsTwo />

            <ClientFeedbackStyle2 />

            <PricingPlanStyle2 />

            <FreeTrialStyle2 />
            
            <PartnerStyle1 />
             
            <FooterStyle />
        </>
    )
}

export default IndexPage2;