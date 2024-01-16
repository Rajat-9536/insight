import React from 'react'
import { Header } from '../Components/Header'
import { AboutUs } from '../Components/AboutUs'
import { Expertise } from '../Components/Expertise'
import { Itembar } from '../Components/Itembar'
import { Services } from '../Components/Services'
import { Testimonial } from '../Components/Testimonial'
import { Contact } from '../Components/Contact'
import { FAQs } from '../Components/FAQs'
import { BrandAwareness } from '../Components/BrandAwareness'

export const Home = () => {
  return (
    <div>
        <Header/>
        <AboutUs/>
        <Expertise/>
        <Itembar/>
        <Services/>
        <Testimonial/>
        <Contact/>
        <BrandAwareness/>
        <FAQs/>
    </div>
  )
}
