import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Finden Sie uns</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Gartenstraße 5, 1010 Wien, Österreich</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Öffnungszeiten</p>
        <p className="p__opensans">Mo - Fr: 10:00 Uhr - 02:00 Uhr</p>
        <p className="p__opensans">Sa - So: 10:00 Uhr - 03:00 Uhr</p>
      </div>
      <a href="#book" style={{ margin: '2rem 0' }}> <button type="button" className="custom__button">Einen Tisch reservieren</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
