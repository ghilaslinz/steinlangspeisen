import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Entdecken Sie den neuen Geschmack" />
      <h1 className="app__header-h1">Der Schlüssel zur feinen Küche</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sitzen Sie in unserem Restaurant und genießen Sie die Eleganz. Unsere sorgfältig ausgewählten Zutaten und die meisterhafte Zubereitung sorgen für ein unvergleichliches Geschmackserlebnis. Die Harmonie von Ambiente und Aroma erwartet Sie. Genießen Sie die Vielfalt der Aromen in einem Raum, der für Lebensgenuss und Geselligkeit steht</p>
      <a href="#book"> <button type="button" className="custom__button">Einen Tisch reservieren</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
