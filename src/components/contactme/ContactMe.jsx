import React from 'react';
import './contactme.css';

const ContactMe = () => {
  return (
    <div className="contact__page">
        <div className='contact__info'>
            <div className="contact__info-text">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>

            <form action="/" className="contact__info-form">
                <div className="contact__info-form-row">
                    <div className="contact__info-form-firstName">
                        <label hmtlFor="first_name">First Name </label>
                        <input id="first_name" type="text" placeholder='Enter your first name' required/>
                    </div>
                    <div className="contact__info-form-lastName">
                        <label hmtlFor="last_name">Last Name </label> 
                        <input type="text" placeholder='Enter your last name' required/>
                    </div>
                </div>
                <div className="contact__info-form-email">
                    <label hmtlFor="email">Email </label>
                    <input id="email" type="email" placeholder='yourname@email.com' required/>
                </div>
                <div className="contact__info-form-message">
                    <label hmtlFor="message">Message </label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
                </div>
                <div className="contact__info-form-checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox" required/>
                    <label hmtlFor="checkbox">You agree to providing your data to Ekereke Precious Imeh who may contact you. </label>
                </div>
                <div className="contact__info-form-button" >
                    <button id='btn__submit'>Send message</button>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default ContactMe