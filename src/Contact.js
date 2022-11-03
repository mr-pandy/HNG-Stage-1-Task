import React from 'react';
import { Footer, ContactMe } from './components';
import './Contact.css'
import './index.css';

const Contact = () => {
  return (
    <div className='Contact'>
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Contact;