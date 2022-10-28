import React from 'react'
import './socials.css';
import github from '../../assets/github.png';
import slack from '../../assets/slack.jpg'

const Socials = () => {
  return (
    <div className='socials__section'>
      <div className='socials__section-slack'>
        <img src={slack} alt="slack icon" />
      </div>
      <div className='socials__section-github'>
        <img src={github} alt="github icon" />
      </div>
    </div>
  )
}

export default Socials