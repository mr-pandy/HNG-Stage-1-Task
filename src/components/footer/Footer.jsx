import React from 'react'
import './footer.css';
import zuriImage from '../../assets/zuriImage.png';
import Ingressive from '../../assets/I4G.png'

const Footer = () => {
  return (
    <div className='footer__section'>
      <div className='footer__section-container'>
        <div className='footer__section-zuri'>
          <img src={zuriImage} alt="" />
        </div>
        <div className='footer__section-text'>
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div className='footer__section-ingressive'>
          <img src={Ingressive} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer