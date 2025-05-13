import React from 'react'
import SectionBanner from '../../Components/SectionBanner'
import SectionBorder from '../../Components/SectionBorder'
import AboutUsDetails from './Sections/AboutUsDetails'
import Details from './Sections/Details'
import OfficeCulture from './Sections/OfficeCulture'
import MeetOurTeam from './Sections/MeetOurTeam'

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

      {/* sponser */}

      {/* newsletter */}

    </div>
  )
}

export default About