import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, SpecialMenu, ReservationForm } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <ReservationForm />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
