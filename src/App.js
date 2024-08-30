import React, { useState, useEffect } from 'react';
import { Navigation } from './components/components';
import { Header } from './components/header';
import { Home } from './components/home';
import { Features } from './components/features';
import { About } from './components/about';
import { Activities } from './components/activities';
import { ActivitiesAndSessions } from './components/activitiesSessions';
import { Bookings } from './components/bookings';
import { Footer } from './components/footer';

import SmoothScroll from 'smooth-scroll';

// Create dummy data
import JsonData from "./data/data.json";

import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  const [LandingPageData, setLandingPageData] = useState([]);
  useEffect(() => {
    console.log(JsonData)
    setLandingPageData(JsonData)
  },[])

  return (
    <div>
      <Navigation />
      <Header />
      <Home />
      <Features />
      <About data={LandingPageData.Team}/>
      <Activities />
      <ActivitiesAndSessions />
      <Bookings />
      <Footer />
    </div>
  )

}



export default App;