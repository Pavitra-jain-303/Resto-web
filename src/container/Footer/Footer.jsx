import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding">
    <Newsletter />
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">8518 Locust Dr. Bloomfield, NJ 07003, USA</p>
        <p className="p__opensans">+1 212-333-4444</p>
        <p className="p__opensans">+1 212-666-8888</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className="p__opensans">"The best way to find yourself is to loose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00am - 11:00pm</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
