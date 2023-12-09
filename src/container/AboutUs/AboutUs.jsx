import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Über Uns</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Erleben Sie bei SteinKlang Speisen eine Fusion aus ausgewählten Aromen und herzlicher Gastfreundschaft in einem Ambiente, das Tradition mit Innovation ehrt.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.woodspoon} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Geschichte</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Gegründet auf der Liebe zur Kochkunst, wuchs SteinKlang Speisen aus der Tradition in die Moderne. Jedes Gericht spiegelt unsere Reise wider – von den Wurzeln bis zur Gegenwart.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
