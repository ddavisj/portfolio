import React from 'react';
import './MyApp.css';

const MyApp = ({
  title,
  subtitle,
  children,
  icon,
  image,
  appLink,
  fullWidth,
}) => {
  /* If app is full-width, hide all images */

  return (
    <div className={`my-app ${fullWidth ? 'hide-images' : ''}`}>
      <h3>
        <a
          className="app-heading"
          href={appLink}
          target="_blank"
          rel="noreferrer"
        >
          <img className="app-icon" src={icon} alt="App icon" />
          <u>{title}</u>
        </a>
      </h3>
      <div className="columns">
        <div className="wide-image-column wide-only">
          <a
            className="no-border"
            href={appLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="wide-image"
              src={image}
              alt="App widescreen screenshot"
            />
          </a>
        </div>

        <div className="app-text-mdx">
          <div className="mobile-image">
            <p className="subtitle">{subtitle}</p>
            <a className="mob-only no-border" href={appLink}>
              <img src={image} alt="App mobile screenshot" />
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyApp;
