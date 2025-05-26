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
import AdminHeader from './Admin_Panel/Main_Body/AdminHeader'
import DestinationDetail from './Pages/Destination/DestinationDetail'
import Destination from './Pages/Destination/Destination'


function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/sign-up' element={<SignUpForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='destination/:name' element={<DestinationDetail/>}/>
            <Route path='/addMembers' element={<AddMemberDetails/>}/>
            <Route path='/admin/dashboard' element={<AdminHeader/>}/>
        </Routes>
    
    </BrowserRouter>

  
    </>
  )
}

export default App
