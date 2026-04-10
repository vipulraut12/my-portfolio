import React from 'react';
import './Home.css';
import bannerImg from '../assets/Vipul Banner.png';
import Navbar from '../components/Navbar.jsx'
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contacts from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      
      {/* Added id="home" so the Navbar link works */}
      <section id="home" className="home-section">
        <div className="hero-container">
          
          <div className="hero-main-row">
            <h1 className="name-title">
              Vipul<br />
              Suresh<br />
              Raut
            </h1>
            
            <div className="image-container">
              <img 
                src={bannerImg} 
                alt="Vipul Suresh Raut Banner" 
                className="banner-rectangle" 
              />
            </div>
          </div>

          <div className="intro-container">
            <p className="intro-text">
              I am a Full Stack Developer with 2 years of experience in web development, 
              specializing in both backend and frontend technologies. My expertise spans 
              the Java/Spring Boot and .NET/C# ecosystems, complemented by modern 
              frontend frameworks like React and Angular. I am passionate about 
              building scalable, efficient, and user-friendly digital solutions.
            </p>
          </div>

        </div>
      </section>

      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;