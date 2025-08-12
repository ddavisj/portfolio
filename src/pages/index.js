import '../components/App.css';

import React from 'react';

// Config
import config from '../../config';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import MyApp from '../components/MyApp';
import CustomMDX from '../components/CustomMDX';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';

// Images
import screen from '../assets/images/me-pic.jpg';
import aboutMeImg from '../assets/images/intro-about-me.jpg';
import workExperienceImg from '../assets/images/intro-work-experience.jpg';
import backgroundImg from '../assets/images/intro-background.jpg';
import myAppsImg from '../assets/images/intro-my-apps.jpg';

// Apps - icons - 180sq, screenshots: 410 x 425

import EchoActiveMDX from '../my-apps/EchoActive';
import echoActiveIcon from '../assets/images/echoactive-logo.png';
import echoActiveScreenShot from '../assets/images/echoactive-screen.jpg';

import GrowBookMDX from '../my-apps/GrowBook';
import growBookIcon from '../assets/images/growBook3.png';
import growBookScreenShot from '../assets/images/growBook-screen3.jpg';

import MyHaikuMDX from '../my-apps/Myhaiku';
import myhaikuIcon from '../assets/images/myhaiku.png';
import myhaikuScreenShot from '../assets/images/myhaiku-screen.jpg';

import VoteNowMDX from '../my-apps/VoteNow';
import votenowLogo from '../assets/images/votenow-icon.png';
import votenowScreenShot from '../assets/images/votenow-screen.jpg';

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
            Web designer turned front-end developer. <br />
            Looking for full-time or contract work. <br />
          </h2>
        </header>
        <SocialIcons eADigitalRegular={eADigitalRegular} />
      </section>

      <section id="two" className="wrapper">
        <div className="inner alt">
          <section className="spotlight">
            <div className="image">
              <img src={aboutMeImg} alt="About me" />
            </div>
            <div className="content">
              <h3>Summary</h3>
              <p>
                Currently studying and building apps with Vue, Nuxt, Pinia,
                Next, TypeScript and React. I've completed full-stack&nbsp;
                <a
                  href="https://www.udemy.com/course/node-with-react-fullstack-web-development/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React, Redux & MongoDB
                </a>
                , as well as
                <a
                  href="https://www.udemy.com/course/react-redux/"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;Modern React/Redux
                </a>
                ,&nbsp;and&nbsp;
                <a
                  href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JavaScript, Node & Express
                </a>
                , and PHP and MySQL courses over the last few years.
              </p>

              <p>
                I worked as a front-end developer in the mental health space
                until June 2023, and keep busy by designing and hosting websites
                via my agency&nbsp;
                <a
                  href="https://eadigital.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  EA Digital
                </a>
                . I also run a web-startup and volunteer on the websites of
                various NGOs.
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
                I completed a one year contract for&nbsp;
                <a
                  href="https://nwmphn.org.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  North Western Melbourne Primary Health Network
                </a>
                &nbsp;as a front-end web developer in June 2023. I created
                custom components for a system that clinicians use to assess and
                refer clients, improved the system's UI/UX, and created
                wireframes and design briefs. The stack was built on Python and
                Flask, hosting was via AWS; I mainly worked with JavaScript,
                Jinja and Bootstrap. We used CI/CD and agile techniques, and
                collaborated via Git and Github.
              </p>
              <p>
                I also design and host WordPress and Joomla websites for various
                clients through&nbsp;
                <a
                  href="https://eadigital.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  EA Digital
                </a>
                , and run an eco-startup called&nbsp;
                <a
                  href="https://www.echoactive.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  Echo Active
                </a>
                &nbsp;in my spare time. I also volunteer with&nbsp;
                <a
                  href="https://treeproject.org.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  TreeProject
                </a>
                , a Victorian environmental NGO, as a web designer and
                developer, and&nbsp;
                <a
                  href="https://landofwelcome.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Land of Welcome
                </a>
                , an NGO that helps refugees integrate into Australia.
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
                &nbsp;for more about my work history.
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
                My latest web-app, Echo Active, was built with Nuxt, Vue, Prisma
                and Tailwind. I've also listed apps below that I've built with
                Next JS and TypeScript, the MERN stack, and React.
              </p>
            </div>
          </section>

          <section id="my-apps">
            <h3>App Showcase</h3>
            <br />

            <MyApp
              title="Echo Active"
              appLink="https://www.echoactive.au/"
              icon={echoActiveIcon}
              image={echoActiveScreenShot}
              subtitle="Echo Active is a platform for nature lovers. It was built with Javascript frameworks Vue and Nuxt, Prisma ORM, PostgreSQL, Tailwind CSS and a custom auth module."
            >
              <EchoActiveMDX />
            </MyApp>
          </section>

          <section>
            <MyApp
              title="growBook"
              appLink="https://growbook.vercel.app/"
              icon={growBookIcon}
              image={growBookScreenShot}
              subtitle="growBook lets growers upload images and info about their favourite plants. It was built with Vue and Nuxt, Prisma, Tailwind CSS and Supabase."
            >
              <GrowBookMDX />
            </MyApp>
          </section>

          <section>
            <MyApp
              title="MyHaiku"
              appLink="https://myhaiku.vercel.app/"
              icon={myhaikuIcon}
              image={myhaikuScreenShot}
              subtitle="MyHaiku lets users create and share haiku, ie. short Japanese poems. It was built with NextJS, TypeScript and Tailwind CSS."
            >
              <MyHaikuMDX />
            </MyApp>
          </section>

          <section>
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
              subtitle="MyBooks lets users create a personal book collection."
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
              subtitle="Kurztube connects to the YouTube API and lets users search for and play a video."
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
              subtitle="Plants 'n Things is a plant shop, built with vanilla-JS, a custom Node server, Express and HTML templates."
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
