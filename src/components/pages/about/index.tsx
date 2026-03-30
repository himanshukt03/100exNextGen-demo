import BreadCrumb from '@/components/common/BreadCrumb'
import React from 'react'
import AboutArea from './AboutArea'
import Cta from '@/components/common/CtaOne'
import Team from '@/components/common/TeamTwo'
import Brand from './Brand'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderSix from '@/layouts/headers/HeaderSix'
import Testimonial from './Testimonial'

const About = () => {
  return (
    <>
      <HeaderSix />
      <main className="main-area fix">
        <BreadCrumb title='About Us' sub_title='About Us' />
        <AboutArea />
        <Cta />
        <Team />
        <Testimonial />
        <Brand />
      </main>
      <FooterOne />
    </>
  )
}

export default About
