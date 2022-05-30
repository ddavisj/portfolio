import './Footer.css';

import React from 'react';
import config from '../../config';

import eaDigitalHover from '../assets/images/EA-Digital-blue.png';

export default function SocialIcons({ eADigitalRegular }) {
  return (
    <>
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
              title="EA Digital | View my design work"
            />
            <img
              className="top"
              src={eADigitalRegular}
              alt="EA Digital logo"
              title="EA Digital | View my design work"
            />
          </a>
        </li>
      </ul>
    </>
  );
}
