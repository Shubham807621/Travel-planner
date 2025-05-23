import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Header from './Components/Header/Header'
import SignUpForm from './Components/SignUp/SignUpForm'
import LoginForm from './Components/LoginPage/LoginForm'
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs'

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
        </Routes>
    
    </BrowserRouter>

  
    </>
  )
}

export default App
