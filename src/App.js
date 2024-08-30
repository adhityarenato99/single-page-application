import React, { useState, useEffect } from 'react';
import { Navigation } from './components/components';
import { Header } from './components/header';
import SmoothScroll from 'smooth-scroll';

import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  const [LandingPageData, setLandingPageData] = useState([]);
  useEffect(() => {
    // console.log(JsonData)
    // setLandingPageData(JsonData)
  },[])

  return (
    <div>
      <Navigation />
      <Header />
    </div>
  )

}



export default App;