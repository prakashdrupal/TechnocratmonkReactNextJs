import React from 'react'
import NavbarStyle from '@/components/_App/NavbarStyle'
import PageBannerStyle1 from '@/components/Common/PageBannerStyle1'
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import FooterStyle from '@/components/_App/FooterStyle'
 
const Contact = () => {
    return (
        <>
            <NavbarStyle /> 
            <PageBannerStyle1 
                pageTitle="Contact Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Us"
            />

            <ContactForm />

            <ContactInfo />
            <FooterStyle />
        </>
    )
}

export default Contact;