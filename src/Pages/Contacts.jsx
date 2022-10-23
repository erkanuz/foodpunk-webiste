import React from 'react'
import '../Styles/contacts.css'

const Contacts = () => {
  return (
    <section className="contact section">
      <h2 className="ct">Subscribe to our Newsletter</h2>
      <h3 className="cstt">Thank you for visiting our website and for your subscribes</h3>
      <div className="contact_container container grid">
          <form action="" className='subs_from'>
            <input type="text" placeholder='Enter email' className='subs_input' />
            <button className='subs_button'>Subscribe</button>
          </form>
      </div>
    </section>
  )
}

export default Contacts