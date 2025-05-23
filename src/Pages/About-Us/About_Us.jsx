import React from 'react'
import './About_us.css'
import about_us_img from '../../Images/about-image-1.svg'
import stone_img from '../../Images/about-stone-right.svg'

export default function About_Us() {
  return (
    <>
        <div className='about-us-wrapper'>
            <section className="hero-section my-5">
                <div className="hero-illustration">
                    <img src={about_us_img} alt="Adventurer" />
                </div>
                <div className="hero-content">
                    <p className="hero-subtitle">About Treker</p>
                    <h1 className="hero-title">
                        <span className="highlight">World Best</span> Travel Agency
                    </h1>
                    <p className="hero-description">
                        Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land.
                    </p>
                    <ul className="hero-list">
                        <li>✓ Ratione voluptatem.sequi nesciunt.</li>
                        <li>✓ Ratione voluptatem.</li>
                        <li>✓ Ratione voluptatem sequi.</li>
                    </ul>
            
                </div>
            </section>
            <div className="stone-img">
                <img src={stone_img} alt="" />
            </div>
        </div>
    </>
  )
}
