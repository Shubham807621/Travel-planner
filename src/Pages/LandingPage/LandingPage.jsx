import React from 'react'
import homePic from '../../Images/Home-1.png'
import './LandingPage.css'
import stone_img from '../../Images/about-stone-right.svg'

export default function LandingPage() {
  return (
    <>
     <div className='landing-Page-wrapper'>
            <div className="landing-page-content">
                <h3>Never Stop</h3>
                <h1>Exploring</h1>
                <p>Their house is a museum where people come to see ‘em. They really are a scream the Addams Family. These days are all Happy and Free. These days are all share them with me oh baby.</p>
        
            </div>
            <div className="stone-img">
                <img src={stone_img} />
            </div>
            <div className="landing-page-image-wrapper">
                <img src={homePic} alt="landing-page-pic" />
            </div>
        </div>
    </>
  )
}
