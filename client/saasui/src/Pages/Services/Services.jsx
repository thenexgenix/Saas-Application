import React from 'react'
import SectionBanner from '../../Components/SectionBanner'
import SectionBorder from '../../Components/SectionBorder'
import AboutServices from './Sections/AboutServices'
import ServicesSection from './Sections/ServicesSection'
import PricingSection from './Sections/PricingSection'
import NewsletterSection from '../../Shared/NewsletterSection'
import Review from '../../Shared/Review/Review'
import Sponsor from '../../Shared/Sponser/Sponser'

function Services() {
  return (
    <div>
        {/* header */}
        <SectionBanner heading={"Services"}/>
        <SectionBorder />

        {/* about us */}
        <AboutServices />
        <SectionBorder />

        {/* services */}
        <ServicesSection />
        <SectionBorder />

        {/* pricing */}
        <PricingSection />
        <SectionBorder />

        {/* reviews */}
        <Review />
        <SectionBorder />

        {/* sponsor */}
        {/* <Sponsor />
        <SectionBorder /> */}

        {/* newsletter */}
        <NewsletterSection />
        <SectionBorder />
    </div>
  )
}

export default Services