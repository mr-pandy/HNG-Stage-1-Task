import React from 'react'
import './profiledetails.css';
import image from '../../assets/profilepic.jpeg';

const ProfileDetails = () => {
  return (
    <div className='profile__details'>
      {/* Profile Image */}
      <div className='profile__details-img'>
        <img id='profile__img' src={image} alt="Ekereke Precious - femiyoghurt" />
      </div>

      {/* Profile Name */}
      <div className='profile__details-name'>
        <h1>@just_cruise_</h1>
        <p id='slack'>Slack Id: femiyoghurt</p>
      </div>

    </div>
  )
}

export default ProfileDetails;
