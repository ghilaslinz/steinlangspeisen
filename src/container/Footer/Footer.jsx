import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Kontakt</h1>
        <p className="p__opensans">Gartenstraße 5, 1010 Wien, Österreich</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Der beste Weg, sich selbst zu finden, ist, sich im Dienst an anderen zu verlieren.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Arbeitszeiten</h1>
        <p className="p__opensans">Montag-Freitag:</p>
        <p className="p__opensans">10:00 Uhr - 02:00 Uhr</p>
        <p className="p__opensans">Samstag-Sonntag:</p>
        <p className="p__opensans">10:00 Uhr - 03:00 Uhr</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Steinlang Speisenn. Alle Rechte vorbehalten.</p>
    </div>

  </div>
);

export default Footer;
