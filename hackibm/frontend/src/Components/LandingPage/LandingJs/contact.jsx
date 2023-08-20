import React from 'react'
import '../Landingcss/home.css';
import '../Landingcss/contact.css';
const Contact = () => {
  return (
    <div id='contact' className="contact-con">
      <h1 className="primary-heading">
        Have Question In Mind?
      </h1>
      <h1 className="primary-heading">
        Let Us Help You
      </h1>
      <div className="contact-form-con">
        <input type="text" placeholder='yourmail@gmail.com' />
        <button className="secondary-button">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Contact;
