import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header/Header'
import SignUpForm from './Components/SignUp/SignUpForm'
import LoginForm from './Components/LoginPage/LoginForm'
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import AddMemberDetails from './Admin-Panel/AddMembers/AddMemberDetails';
import AdminHeader from './Admin-Panel/Main-Body/AdminHeader'
import DestinationDetail from './Pages/Destination/DestinationDetail'
import Destination from './Pages/Destination/Destination'
import DestinationCity from './Pages/DestinationCity/DestinationCity'
import ActivePage from './Pages/Admin-Pages/Packages/ActivePage';
import PendingPage from './Pages/Admin-Pages/Packages/PendingPage'
import ExpiredPage from './Pages/Admin-Pages/Packages/ExpiredPage'
import NewUser from './Admin-Panel/Users/NewUser'
import BookingEnquiry from './Admin-Panel/Booking-Enquiry/BookingEnquiry'
import HotelDetails from './Pages/HotelDetails/HotelDetails'
import Booking from './Pages/Travel-Booking/Payment Gateway/Booking'
import Dashboard from './Admin-Panel/Dashboard/Dashboard'
import Footer from './Components/Footer/Footer'
import Form from './Pages/Admin-Pages/AddPackage/Form'
import Ride from './Pages/Ride/Ride'
import User from './Admin-Panel/Users/User'
import FlightBookingForm from './Components/FlightBooking/FlightBookingForm'
import FlightResults from './Components/FlightBooking/FlightResults'
import BookingPage from './Components/FlightBooking/BookingPage'



function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <AdminHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/destination/:state' element={<DestinationDetail />} />
          <Route path='/destination/:state/:city' element={<DestinationCity />} />
          <Route path='/addMembers' element={<AddMemberDetails />} />
          <Route path='/admin/active-package' element={<ActivePage />} />
          <Route path='/admin/pending-package' element={<PendingPage />} />
          <Route path='/expiredpage' element={<ExpiredPage />} />
          <Route path='/admin/new-users' element={<NewUser />} />
          <Route path='/admin/enquiry-booking' element={<BookingEnquiry />} />
          <Route path='/destination/:city/hotel-details/:id' element={<HotelDetails/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin/add-package" element={<Form />} />
          <Route path='/book-ride' element={<Ride/>}/>
          <Route path='/admin/user' element={<User/>}/>
          <Route path="/flightbook" element={<FlightBookingForm />} />
          <Route path="/flights" element={<FlightResults />} />
          <Route path="/book-now" element={<BookingPage />} />

        </Routes>
      <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App
