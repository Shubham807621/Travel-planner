import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header/Header'
import SignUpForm from './Components/SignUp/SignUpForm'
import LoginForm from './Components/LoginPage/LoginForm'
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import AddMemberDetails from './Pages/AddMembers/AddMemberDetails';
import AdminHeader from './Admin-Panel/Main-Body/AdminHeader'
import DestinationDetail from './Pages/Destination/DestinationDetail'
import Destination from './Pages/Destination/Destination'
import DestinationCity from './Pages/DestinationCity/DestinationCity'
import ActivePage from './Pages/Admin-Pages/Packages/ActivePage';
import PendingPage from './Pages/Admin-Pages/Packages/PendingPage'
import ExpiredPage from './Pages/Admin-Pages/Packages/ExpiredPage'
import NewUser from './Pages/Admin-Pages/Users/NewUser'



function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <AdminHeader/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/sign-up' element={<SignUpForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/destination/:name' element={<DestinationDetail/>}/>
            <Route path='/destination/:state/:city' element={<DestinationCity/>}/>
            <Route path='/addMembers' element={<AddMemberDetails/>}/>
            <Route path='/activepage' element={<ActivePage/>}/>
            <Route path='/pendingpage' element={<PendingPage/>}/>
            <Route path='/expiredpage' element={<ExpiredPage/>}/>
            <Route path='/newuser' element={<NewUser/>}/>
        </Routes>
    
    </BrowserRouter>

  
    </>
  )
}

export default App
