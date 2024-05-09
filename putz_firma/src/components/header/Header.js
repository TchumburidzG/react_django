import React from 'react';
import './hedear.css';
import { WhatsApp } from '../socMedia/Whatsapp';
import { Messenger } from '../socMedia/Messanger';
import { Instagram } from '../socMedia/Instagram';
import { TikTok } from '../socMedia/TikTok';
import MenuIcon from '../../assets/icons/menu.svg';
import { Link } from "react-router-dom";
import cover from '../../assets/pics/cover.jpg';
import phone from '../../assets/icons/phone.svg';

export default function Header({ showMenu, setShowMenu }) {
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (

    <header className='header-container'>
      <div className="header">
        <nav>
          <div className="site-name">
            <div><Link className='site-name-link' to="/">CLEANING TOOLS</Link></div>
          </div>
          <ul>
            <li><Link to="/">მთავარი</Link></li>
            <li> <Link to="/contact">კონტაქტი</Link></li>
          </ul>
          
          <div className='telephone'>
            <img className='draging' src={phone} style={{ paddingRight: '4px' }} alt="phone number, ტელეფონის ნომერი" />
            511 33 44 77
          </div>
            <div className='contact-links'>
              <div className='contact-icons'>
                <WhatsApp />
                <Messenger />
                <Instagram />
                <TikTok />
              </div>
            </div>
          <div className="menu-btn" onClick={toggleMenu} >
            <img src={MenuIcon} alt="menu" />
          </div>
          </nav>
      </div>
      <div className='cover-container' > <img src={cover} alt="cover" /></div>
    </header>
  );
}
