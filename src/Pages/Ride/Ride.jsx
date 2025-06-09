import React from 'react'
import RideBookingForm from './RideBookingForm/RideBookingForm'
import BookingSteps from './BookingSteps/BookingSteps'
import MapCoverage from './MapCoverage/MapCoverage'
import Testimonials from './Testimonials/Testimonials'

export default function Ride() {
  return (
   <>
        <div className='ride-wrapper pt-5'>
          <RideBookingForm/>
          <BookingSteps/>
          <MapCoverage/>
          <Testimonials/>
        </div>

   </>
  )
}
