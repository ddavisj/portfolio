import './Footer.css';

import React from 'react';
import SocialIcons from './SocialIcons';

import eADigitalRegular from '../assets/images/EA-Digital-grey.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <SocialIcons eADigitalRegular={eADigitalRegular} />
      <p className="copyright">&copy; {year} David Hack</p>
    </footer>
  );
}
