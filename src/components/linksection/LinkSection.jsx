import React from 'react'
import './linksection.css';

const LinkSection = () => {
  return (
    <div className='link__section'>

      {/* Twitter  */}
      <div className='link__section-twitter scale-up-center'>
        <button id='twitter'>
          <a href="https://twitter.com/just_cruise_">Twitter Link</a>
        </button>
      </div>

      {/* Zuri Team */}
      <div className='link__section-zuriteam scale-up-center'>
        <button id='btn__zuri'>
          <a href="https://training.zuri.team/">Zuri Team</a>
        </button>
      </div>

      {/* Zuri Books  */}
      <div className='link__section-zuribooks scale-up-center'>
        <button id='books'>
          <a href="http://books.zuri.team/">Zuri Books</a>
        </button>
      </div>

      {/* Python Books  */}
      <div className='link__section-pythonbooks scale-up-center'>
        <button id='book__python'>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=femiyoghurt">Python Books</a>
        </button>
      </div>

      {/* Background Check for Coders  */}
      <div className='link__section-background scale-up-center'>
        <button id='pitch'>
          <a href="https://background.zuri.team/">Background Check for Coders</a>
        </button>
      </div>

      {/* Design Books */}
      <div className='link__section-designbooks scale-up-center'>
        <button id='book__design'>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=femiyoghurt">Design Books</a>
        </button>
      </div>


    </div>
  )
}

export default LinkSection