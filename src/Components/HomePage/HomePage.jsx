import React from 'react'
import './HomePage.css'

import LandingPage from '../../Pages/LandingPage/LandingPage'
import FilterForm from '../../Pages/FilterForm/FilterForm'
import WhyChoose from '../../Pages/WhyChoose/WhyChoose'
import TrendingDestinations from '../../Pages/TrendingDestinations/TrendingDestinations'
import About_Us from '../../Pages/About-Us/About_Us'


export default function HomePage() {

  return (
    <>
       <LandingPage/>
      
       <FilterForm/>

       <About_Us/>

       <WhyChoose/>

       <TrendingDestinations/>

    
    </>
  )
}
