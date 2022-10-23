import React from 'react'
import '../Styles/footer.css'

import {FaPhoneAlt} from 'react-icons/fa'
import {MdOutlineMarkEmailRead} from 'react-icons/md'

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footer_container container grid">
        <div className="footer_content">
          <h3 className="footer_logo">foodpunk</h3>
          <p className="footer_description">San Bruno, CA, USA</p>
          <p className="footer_description">Best info website for food recipes</p>
        </div>

        <div className="footer_content">
          <h3 className="footer_title">About us</h3>
          <ul className="links">
            <li><a href="#a" className="footer_link">Details</a></li>
            <li><a href="#a" className="footer_link">Discounts</a></li>
            <li><a href="#a" className="footer_link">Report a bug</a></li>
            <li><a href="#a" className="footer_link">Terms of Services</a></li>
          </ul>
        </div>

        <div className="footer_content">
          <h3 className="footer_title">Community</h3>
          <ul className="links">
            <li><a href="#a" className="footer_link">Support</a></li>
            <li><a href="#a" className="footer_link">Questions</a></li>
            <li><a href="#a" className="footer_link">Get in touch</a></li>
            <li><a href="#a" className="footer_link">Customer help</a></li>
          </ul>
        </div>

        <div className="footer_content">
        <h2 className="footer_title">Contacts</h2>
          <div className="links">
            <p className='footer_link'><FaPhoneAlt/> - 1234567890 </p>
            <p className="footer_link"><MdOutlineMarkEmailRead/> - foodpunk@gmail.com</p>
          </div>
        </div>

      </div>
      <p className="footer_copy">&#169; Eric Uz. All right reserved</p>
    </section>
  )
}

export default Footer