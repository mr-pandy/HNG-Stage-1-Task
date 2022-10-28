import React from 'react';

import { Footer, LinkSection, ProfileDetails, Socials, ShareButton } from './components';
import './App.css'
import './index.css';


const App = () => {
  return (
    <div className='App'>
      <ShareButton />
      <ProfileDetails />
      <LinkSection />
      <Socials />
      <Footer />
    </div>
  )
}

export default App;