import React from 'react';
import './cards.css';

import MobilSlider from '../carousel/Carousel'
import Services from '../services/Services';
import { useCallbackState } from '../globalContext';

export default function Cards() {
  const { devices } = useCallbackState();

  const cards = () => {
    if (devices.results) {
      return devices.results.map((item, index) => (
        
        <li className="cards__item" key={index}  >
          <MobilSlider item={item} />
        </li>
      ));
    }
  };
  return (
    <div className='body-container'>
      <ul className="cards">{cards()}</ul>
      <Services />
    </div>);
}
