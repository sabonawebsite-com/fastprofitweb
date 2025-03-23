import React from 'react'
import './Hero.css'
import profile from './sabo21.jpg'
import qrcode from './web.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile} alt="" className='proimg'/>
      <img src={qrcode} alt="" className='qrcode'/>
      <h1><span>Hi, I'm Sabona Marara</span></h1>
      
      <h1>I am a frontend web developer based in Ethiopia. </h1>
      
    
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50}href='#contact'>connect with me</AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/open?id=1fM-DdMMFqbswABdffu3z7-75WqHxbcq8">My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
