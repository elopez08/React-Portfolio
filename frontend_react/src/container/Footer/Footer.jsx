import React, { useState } from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  //Does this have something?  In the beginning, it's going to be empty since we're just starting out
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  //Deconstruct property, or, process of deconstructoring
  //What this means is that we're pulling the values name, etc., from the "formData" object
  const { name, email, message } = formData;

  //Handles a "e" case event:
  const handleChangeInput = (e) => {
    //Getting the input that we're typing in and get the value of the "name" and "value" that's in there.  This is outside of what formData is doing
    const { name, value } = e.target;

    //We can then dynamically set for "setFormData". 
    //Remember what we did with formData:
    /* 
      const { name, email, message } = formData;
    */
    //We destructured the data and have three values.  Then, one of those said values, "name" is then changed to what "value" is
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src = {images.email} alt="email" />
          <a href="mailto:edgardoca2007@hotmail.com" className="p-text">edgardoca2007@hotmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src = {images.mobile} alt="mobile" />
          <a href="tel: +1 (909) 561-5719" className="p-text">+1 (909) 561-5719</a>
        </div>
      </div>

    {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            value= {message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type ="button" className="p-text" onClick={handleSubmit}>
        {loading ? 'Sending' : 'Send Message'}
        </button>
      </div>
      :
      <div>
        <h3 className ="head-text">Thank you for getting in touch!</h3>
      </div>
    }

    </>
  )
}

export default AppWrap (
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)