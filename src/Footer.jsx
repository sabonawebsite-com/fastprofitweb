import React, { useState } from 'react'
import './Footer.css'
import logo_footer from './logo.png'

const Footer = () => {
  
 const[comment,setComment]=useState("")
 const handelComment=(e)=>{
  setComment(e.target.value)
 }
  const doPost =()=>{
    document.querySelector(".post").innerHTML=comment
  }
  const[sub,setSub]=useState("")

  return (
    <div className='footer' id='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
           <img src={logo_footer} alt="" />
           <p>you can contact with me by following platform</p>
        </div>
        <div className="footer-top-right">
            {/* <div className="footer-email-input">
                <img src={user} alt="" />
               
                
                <input  type="email" placeholder='Enter Your Email' />
                
            </div> */}
            
            {/* <div className="footer-subscribe" ><p onClick={()=>setSub('subscribed')}>subscribe</p>{sub==="subscribed"?<h3>subscrition is added</h3>:<></>}</div> */}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy;2025 Sabona Marara All Right Resived</p>
        <div className="footer-bottom-right">
          <a href="">Facebook</a>
          <a href="">LinkedIn</a>
          <a href="">YouTube</a>
          <a href="">Reddit</a>
          <a href="">Email</a>
          <a href="">Telegram</a>
        </div>
      </div>
    </div>
  )
}
export default Footer
