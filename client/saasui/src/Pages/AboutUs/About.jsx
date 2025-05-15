import React from 'react'
import SectionBanner from '../../Components/SectionBanner'
import SectionBorder from '../../Components/SectionBorder'
import AboutUsDetails from './Sections/AboutUsDetails'
import Details from './Sections/Details'
import OfficeCulture from './Sections/OfficeCulture'
import MeetOurTeam from './Sections/MeetOurTeam'
import NewsletterSection from '../../Shared/NewsletterSection'
import Review from '../../Shared/Review/Review'
import Sponser from '../../Shared/Sponser/Sponser'

function About() {
  return (
    <div>
      {/* banner section */}
      <SectionBanner heading={"About Us"}/>
      <SectionBorder />

      {/* about us */}
      <AboutUsDetails />
      <SectionBorder />

      {/* details in number */}
      <Details />
      <SectionBorder />

      {/* office culture */}
      <OfficeCulture />
      <SectionBorder />

      {/* Meet our team */}
      <MeetOurTeam />
      <SectionBorder />

      {/* Review */}
      <Review />
      <SectionBorder />

      {/* sponser */}
      <Sponser />
      <SectionBorder />

      {/* newsletter */}
      <NewsletterSection />
      <SectionBorder />

    </div>
  )
}

export default About