import React from 'react'
import SectionBanner from '../../Components/SectionBanner'
import SectionBorder from '../../Components/SectionBorder'
import AboutServices from './Sections/AboutServices'

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

        {/* pricing */}

        {/* reviews */}

        {/* sponsor */}

        {/* newsletter */}
    </div>
  )
}

export default Services