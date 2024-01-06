import "./Footer.css"
import React from 'react'

import flag from "../assets/flag.png"

import linkedin from "../assets/linkedin.png";
import frame from "../assets/Frame.png";

import mcard from "../assets/mcard.png";
import gpay from "../assets/gpay.png";
import opay from "../assets/opay.png";
import apay from "../assets/apay.png";
import amex from "../assets/amex.png";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className="row">
        <div className="child-1">
          <p className="footer-heading">Be the first to know</p>
          <p className="footer-content">Sign up for updates from mettā muse...</p>
          <div className="search-box">
          <input type="email" className="search"></input>
          <button className="button">Subscribe</button>
          </div>
        </div>
        <div className="child-2">
          <p className="footer-heading">CONTACT US</p>
          <p className="footer-content">+44 221 133 5360</p>
          <p className="footer-content">customercare@mettamuse.com</p>
          <p className="footer-content">Currency</p>
          <img src={flag} alt="flag"/>
          <span className="footer-content usd">USD</span>
          <p className="transaction-info">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
     
      </div>
      <hr/>
      <div className="row">
        <div className="child-1">
          <div className="about">
            <p className="footer-heading">mettā muse</p>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Comppances Docs</p>
          </div>
          <div className="faqs">
            <p className="footer-heading">Quick pnks</p>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Popcy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="child-2">
          <p className="footer-heading">Follow Us</p>
          <div style={{display:"flex", marginRight:"4px"}}>
          <div className="follow-us"><img src={linkedin} alt="linkedIn-logo" className="follow" /></div>
          <div className="follow-us"><img src={frame} alt="frame-logo" className="follow" /></div>
          </div>

          <p>mettā muse Accepts</p>

          <img src={gpay} alt="Gpay" className="pay-mode" />
          <img src={mcard} alt="MasterCard" className="pay-mode" />
          <img src={amex} alt="amex" className="pay-mode"
          />
          <img src={apay} alt="Apple pay" className="pay-mode" />
          <img src={opay} alt="opay" className="pay-mode" />



        </div>
      </div>
      <p style={{textAlign:"center"}}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
  )
}

export default Footer