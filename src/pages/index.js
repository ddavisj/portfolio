import '../components/App.css';

import React from 'react';

import config from '../../config';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import MyApp from '../components/MyApp';
import CustomMDX from '../components/CustomMDX';
import Footer from '../components/Footer';

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
            Web designer turned developer. <br />
            Working for a local NGO called TreeProject. <br />
            Just completed a React &amp; Redux course, seeking work as a
            front-end dev <br />
          </h2>
        </header>
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
                Currently studying&nbsp;
                <a
                  href="https://www.udemy.com/course/understanding-typescript/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TypeScript
                </a>
                , I completed a&nbsp;
                <a
                  href="https://www.udemy.com/course/react-redux/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React and Redux
                </a>
                &nbsp; course in April 2022, and
                <a
                  href="https://www.udemy.com/course/javascript-beginners-complete-tutorial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;JavaScript, Node and Express
                </a>
                , and&nbsp;
                <a
                  href="https://www.udemy.com/course/learning-dynamic-website-design/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PHP and MySQL
                </a>
                &nbsp;courses the previous year. I work part-time for
                TreeProject - a Victorian NGO - as a designer/developer, run a
                web-startup and maintain a few websites through a design agency
                called&nbsp;
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
                I've worked at&nbsp;
                <a
                  href="https://treeproject.org.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  TreeProject
                </a>
                &nbsp; since 2020, partly as a web designer but also as a
                developer. Part of my work has involved writing PHP calls to
                stored procedures that pass secure and validated data from
                WordPress forms to a cloud-hosted SQL database.
              </p>
              <p>
                Through&nbsp;
                <a
                  href="https://eadigital.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  EA Digital
                </a>
                , I've designed and hosted WordPress and Joomla websites for
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
                in small and large businesses and have run a successful
                consulting business. See my&nbsp;
                <a
                  href="https://www.linkedin.com/in/davidhack"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                &nbsp;for more info on my work history and studies.
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
                React and Node) and creating React powered web apps that I've
                listed below.
              </p>
            </div>
          </section>

          <section id="my-apps">
            <h2>Featured Apps</h2>

            <MyApp
              title="This Portfolio"
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
