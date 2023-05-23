import '../components/App.css';

import React from 'react';

import config from '../../config';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import MyApp from '../components/MyApp';
import CustomMDX from '../components/CustomMDX';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';

import screen from '../assets/images/me-pic.jpg';
import aboutMeImg from '../assets/images/intro-about-me.jpg';
import workExperienceImg from '../assets/images/intro-work-experience.jpg';
import backgroundImg from '../assets/images/intro-background.jpg';
import myAppsImg from '../assets/images/intro-my-apps.jpg';

import MybooksMDX from '../my-apps/Mybooks';
import mybooksIcon from '../assets/images/mybooks-icon.png';
import myBooksScreenShot from '../assets/images/mybooks-screen.jpg';

import KurztubeMDX from '../my-apps/Kurztube';
import kurztubeIcon from '../assets/images/kurztube-icon.png';
import kurztubeScreenShot from '../assets/images/kurztube-screen.jpg';

import PntMDX from '../my-apps/Plantsnthings';
import pntIcon from '../assets/images/pnt-icon.png';
import pntScreenShot from '../assets/images/pnt-screen.jpg';

import PortfolioMDX from '../my-apps/Portfolio';
import dhLogo from '../assets/images/dh-logo.png';
import eADigitalRegular from '../assets/images/EA-Digital.png';

import VoteNowMDX from '../my-apps/VoteNow';
import votenowLogo from '../assets/images/votenow-icon.png';
import votenowScreenShot from '../assets/images/votenow-screen.jpg';

const IndexPage = () => (
  <CustomMDX>
    <Layout>
      <header id="header">
        <div className="content">
          <h1>
            <a href="/#">{config.heading}</a>
          </h1>
          <p>{config.subHeading}</p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button icon fa-chevron-down">
                  About Me
                </a>
              </Scroll>
            </li>
            <li>
              <Scroll type="id" element="my-apps">
                <a href="#one" className="button icon fa-chevron-down">
                  My Apps
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
        <div className="image phone">
          <div className="inner">
            <img src={screen} alt="" />
          </div>
        </div>
      </header>

      <section id="one" className="wrapper style2 special">
        <header className="major">
          <h2>
            Web designer turned FED. <br />
            Working at NWMPHN and volunteering at TreeProject. <br />
            Just completed a MERN stack app, about to get stuck into NextJS.
            <br />
          </h2>
        </header>
        <SocialIcons eADigitalRegular={eADigitalRegular} />
      </section>

      <section id="two" className="wrapper">
        <div className="inner alt">
          <section className="spotlight">
            <div className="image">
              <img src={aboutMeImg} alt="" />
            </div>
            <div className="content">
              <h3>Summary</h3>
              <p>
                I completed a full-stack&nbsp;
                <a
                  href="https://www.udemy.com/course/node-with-react-fullstack-web-development/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React, Redux and MongoDB course
                </a>{' '}
                in May 2023 and a comprehensive
                <a
                  href="https://www.udemy.com/course/react-redux/"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;React and Redux
                </a>
                &nbsp;course in April 2022, and&nbsp;
                <a
                  href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JS, Node and Express
                </a>
                , and&nbsp;
                <a
                  href="https://www.udemy.com/course/learning-dynamic-website-design/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PHP and MySQL
                </a>
                &nbsp;courses the previous year. I work full-time for North
                Western Melbourne Primary Health Network as a front-end
                developer and volunteer for TreeProject, a Victorian NGO, as a
                web designer and developer. I also run a web-startup and host
                websites through my design agency&nbsp;
                <a
                  href="https://eadigital.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  EA Digital
                </a>
                .
              </p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={workExperienceImg} alt="" />
            </div>
            <div className="content">
              <h3>Work Experience</h3>
              <p>
                I started working at&nbsp;
                <a
                  href="https://nwmphn.org.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  North Western Melbourne PHN
                </a>
                &nbsp;as a front-end web developer in July 2022. I build custom
                components and functionality for a system that clinicians use to
                record patient data, conduct mental health assessments, provide
                counselling services and make external referrals. I also work
                directly with clinicians to improve the system's UI and UX,
                conduct meetings and prepare design briefs. Our stack is built
                on AWS and includes Python, Flask, and Jinja templating, and I
                work mainly with Javascript, Jinja, Bootstrap and HTML. We work
                collaboratively via Git and use GitHub extensively.
              </p>
              <p>
                I've also worked and volunteered at&nbsp;
                <a
                  href="https://treeproject.org.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  TreeProject
                </a>
                &nbsp;since 2020, partly as a web designer but also as a
                developer. Through&nbsp;
                <a
                  href="https://eadigital.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  EA Digital
                </a>
                , I've designed and still host WordPress and Joomla websites for
                various clients. I also created and maintain a startup
                called&nbsp;
                <a
                  href="https://www.echoactive.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Echo Active
                </a>
                &nbsp;in my spare time.
              </p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={backgroundImg} alt="" />
            </div>
            <div className="content">
              <h3>Background</h3>
              <p>
                I've got degrees in Science and Law and have worked as a lawyer,
                in small and large businesses, and have run a successful
                consulting business. See my&nbsp;
                <a
                  href="https://www.linkedin.com/in/davidhack"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                &nbsp;for more about my work history and studies.
              </p>
            </div>
          </section>
          <section className="spotlight">
            <div className="image">
              <img src={myAppsImg} alt="" />
            </div>
            <div className="content">
              <h3>My Apps</h3>
              <p>
                I'm now building skills with the MERN stack (MongoDB, Express,
                React and Node) and creating React powered web apps that are
                showcased below. My upcoming apps will feature NextJS and
                TypeScript.
              </p>
            </div>
          </section>

          <section id="my-apps">
            <h3>App Showcase</h3>
            <br />

            <MyApp
              title="VoteNow"
              appLink="https://votenow.herokuapp.com"
              icon={votenowLogo}
              image={votenowScreenShot}
              subtitle="VoteNow lets users send single click email surveys to a mailing list and monitor feedback."
            >
              <VoteNowMDX />
            </MyApp>
          </section>
          <section>
            <MyApp
              title="This Portfolio Website"
              appLink={null}
              icon={dhLogo}
              image={null}
              subtitle={null}
              fullWidth
            >
              <PortfolioMDX />
            </MyApp>
          </section>
          <section>
            <MyApp
              title="MyBooks"
              appLink="https://mybooksx.herokuapp.com/"
              icon={mybooksIcon}
              image={myBooksScreenShot}
              subtitle="This app lets users create a personal book collection."
            >
              <MybooksMDX />
            </MyApp>
          </section>
          <section>
            <MyApp
              title="KurzTube"
              appLink="https://kurztube.netlify.app/"
              icon={kurztubeIcon}
              image={kurztubeScreenShot}
              subtitle="This app connects to the YouTube API and lets users search for and display a list of videos, select a result and play it in their browser."
            >
              <KurztubeMDX />
            </MyApp>
          </section>
          <section>
            <MyApp
              title="Plants 'n Things"
              appLink="https://plantsnthings.herokuapp.com/"
              icon={pntIcon}
              image={pntScreenShot}
              subtitle="This app is a plant shop, built with vanilla-JS, a custom Node server, Express and HTML templates."
            >
              <PntMDX />
            </MyApp>
          </section>
        </div>
      </section>

      <section id="three" className="wrapper style2 special">
        <header className="major">
          <h2>Thanks for visiting!</h2>
        </header>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="header">
              <a href="#back-to-top" className="button icon fa-chevron-up">
                Back to Top
              </a>
            </Scroll>
          </li>
        </ul>
      </section>

      <Footer />
    </Layout>
  </CustomMDX>
);

export default IndexPage;
