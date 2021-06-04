import React, {useEffect} from 'react';
import WOW from 'wowjs'
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import About from './components/About/About';
import CallUs from './components/CallUs/CallUs';
import OneDay from './components/OneDay/OneDay';
import Reviews from './components/Reviews/Reviews';
import SummerOffers from './components/SummerOffers/SummerOffers';
import Subscribe from './components/Subscribe/Subscribe';
import Teamwork from './components/Teamwork/Teamwork';
import Footer from './components/Footer/Footer';

import './style/mainStyle.css'


function App() {
  useEffect(()=>{
    new WOW.WOW().init();
  })
  return (
    <div className="App">
      <Preloader />
      <Header />
      <About />
      <CallUs />
      <OneDay />
      <Subscribe />
      <SummerOffers />
      <Teamwork />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
