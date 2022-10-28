import React from 'react'
import './sharebutton.css'
import ShareIcon from '../../assets/sharebutton.png'
import closedIcon from '../../assets/closed.png'

const ShareButton = () => {
  return (
    <div className=''>
        <div className='icon'>
        <a href="/">
            <img src={ShareIcon} alt="Share Button" />
        </a>
    </div>
    <div className='closed'>
        <a href="/">
            <img src={closedIcon} alt="close Button" />
        </a>
    </div>
    </div>
  )
}

export default ShareButton