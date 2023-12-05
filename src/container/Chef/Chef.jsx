import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Wort" />
      <h1 className="headtext__cormorant">Woran Wir Glauben</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Unsere Küche feiert mit sorgfältig ausgewählten Zutaten die Verbindung von Tradition und Innovation. Jedes Gericht ist ein Ausdruck unserer Hingabe an herausragenden Geschmack.</p>
        </div>
        <p className="p__opensans">Erleben Sie bei uns eine kulinarische Reise, die durch die Einfachheit und Reinheit der regionalen Aromen besticht. Jeder Gang erzählt eine eigene, köstliche Geschichte.</p>
      </div>

      <div className="app__chef-sign">
        <p>Klaus Hofer</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
