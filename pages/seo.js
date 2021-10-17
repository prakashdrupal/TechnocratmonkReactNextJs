import React from 'react'
import NavbarStyle from '@/components/_App/NavbarStyle'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import KeyFeatures4 from '@/components/Services/KeyFeatures4'
import FooterStyle from '@/components/_App/FooterStyle' 
 import Servicesvideo4 from '@/components/Services/servicesVideo4'
 import Grid20 from '@/components/Services/Grid20'
 import Grid21 from '@/components/Services/Grid21'
 import Grid22 from '@/components/Services/Grid22'
 import Grid23 from '@/components/Services/Grid23'


 import PartnerStyle1 from '@/components/Common/PartnerStyle1'
 import Head from 'next/head'
const Services = () => {
    return (
        <>
            <Head>
                <title>Search Engine Marketing Services – Technocrat Monk</title>
                <meta name="description" content="Come to my store for great apparel!" />
                <meta property="og:title" content="Search Engine Marketing Services – Technocrat Monk" />
                <meta property="og:description" content="Come to my store for great apparel!" />
                <meta property="og:url" content="https://myclothingstore.com/" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarStyle /> 

            <PageBannerStyle1 
                pageTitle="SEO"
                homePageUrl="/"
                homePageText="Home"
                activePageText="SEO"
            />

            <div className="features-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>SEO Audit</h3>
                                <p>Actionable SEO audit of your Website</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>Technical SEO</h3>
                                <p>Optimize code and technical stuff of your website</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-6 col-md-6 xsw-100">
                            <div className="features-item">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Link Building</h3>
                                <p>Earning backlinks to your website from genuine, high-quality websites</p>
                            </div>
                        </div>

                     
                 
                    </div>
                </div>
            </div>
<Servicesvideo4/>
<PartnerStyle1/>
<Grid20/>
<Grid21/>
<Grid22/>
<Grid23/>


            <KeyFeatures4 />

            {/* <div className="ptb-100">
                <AppDownloadStyle1 />
            </div> */}
 
            <FooterStyle />
        </>
    )
}

export default Services;