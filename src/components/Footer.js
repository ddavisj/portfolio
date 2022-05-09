import './Footer.css';

import React from 'react';
import config from '../../config';

import eaDigital from '../assets/images/EA-Digital-grey.png';
import eaDigitalHover from '../assets/images/EA-Digital-blue.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map((social) => {
          const { icon, url, name } = social;
          return (
            <li key={url}>
              <a
                className={`icon ${icon}`}
                target="_blank"
                rel="noreferrer"
                href={url}
              >
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
        <li id="cf">
          <a
            className="no-border"
            target="_blank"
            rel="noreferrer"
            href="https://eadigital.com.au/"
          >
            <img
              className="bottom"
              src={eaDigitalHover}
              alt="EA Digital logo"
            />
            <img className="top" src={eaDigital} alt="EA Digital logo" />
          </a>
        </li>
      </ul>
      <p className="copyright">&copy; {year} David Hack</p>
    </footer>
  );
}
