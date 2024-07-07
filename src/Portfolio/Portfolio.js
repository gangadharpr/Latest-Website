import React from 'react';
import './style.css'; // Import your CSS files here
import './mediaqueries.css';
import GSM from './assets/GSM.jpg';
import gangadharamImage from './assets/Gangadharam.jpg';
import linkedinIcon from './assets/linkedin.png'; // Import LinkedIn icon
import githubIcon from './assets/github.png'; // Import GitHub icon
import emailIcon from './assets/email.png'; // Import Email icon
import checkmarkIcon from './assets/checkmark.png';
import arrowIcon from './assets/arrow.png'; // Import Arrow icon
import GangadharamResume from './assets/Gangadharam Resume.pdf';
import project1Image from './assets/project-1.png'; // Import Project 1 image
import project2Image from './assets/project-2.png'; // Import Project 2 image
import project3Image from './assets/project-3.png'; // Import Project 3 image
import experienceIcon from './assets/experience.png'; // Import Experience icon
import educationIcon from './assets/education.png'; // Import Education icon

const Portfolio = () => {
  const toggleMenu = () => {
    const menuLinks = document.querySelector('.menu-links');
    if (menuLinks) {
      menuLinks.classList.toggle('active');
    }
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/gangadharam-vaddi-0a6271232', '_blank');
  };

  const openGitHubProfile = () => {
    window.open('https://github.com/gangadharpr', '_blank');
  };

  const openCV = () => {
    window.open(GangadharamResume);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">GANGADHARAM VADDI</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#Skills" onClick={() => scrollToSection('Skills')}>Skills</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">GANGADHARAM VADDI</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <ul>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={GSM} alt="GANGADHARAM VADDI picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Gangadharam Vaddi</h1>
          <p className="section__text__p2">Specialization in Underwriting & Bankruptcy</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={openCV}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => scrollToSection('contact')}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn profile"
              className="icon"
              onClick={openLinkedInProfile}
            />
            <img
              src={githubIcon}
              alt="GitHub profile"
              className="icon"
              onClick={openGitHubProfile}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={gangadharamImage} alt="Profile picture" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experienceIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>4 years 3 months US Mortgage Underwriter & Post-closing in BPO</p>
              </div>
              <div className="details-container">
                <img
                  src={educationIcon}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>B.Com.CA. Bachelors Degree</p>
                <p>2019</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Experienced mortgage professional with 2 years specializing in Underwriting and post-closing operations, and overall 4 years of experience in mortgage skills in ensuring accuracy, compliance, and efficiency in loan documentation. Proven track record in streamlining workflows and driving operational excellence. Eager to learn new concepts and work in any field.
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => scrollToSection('experience')}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">KPO (IT)</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React JS</h3>
                    <p>Advance</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Advance</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Python</h3>
                    <p>Advance</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>AI & ML</h3>
                    <p>Advance</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SQL</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>DataScience with Python</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">BPO (Non IT)</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>US Mortgage</h3>
                    <p>Advance</p>
                    <p>Same as US Underwriting & Post-closing</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>US Reverse Mortgage</h3>
                    <p>Advance</p>
                    <p>Same as Bankruptcy</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>US Underwriting & Post-closing</h3>
                    <p>Advance</p>
                    <p>22 months</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>US Bankruptcy</h3>
                    <p>Advance</p>
                    <p>One year</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>US Reverse Bankruptcy</h3>
                    <p>Advance</p>
                    <p>one year</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
</section>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

     <section id="experience">
      <p class="section__text__p1">Explain indetail my Current Experience</p>
      <h1 class="title">US Reverse Bankruptcy</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">KPO (Non IT)</h2>
            <div class="article-container">
               
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">BPO(Non IT)</h2>
            <div class="article-container">

              <ul>
                <li>Assessing the financial situation of clients and determining their eligibility for bankruptcy filing.</li>
                <li>Advising clients on the different types of bankruptcy (Chapter 13, Chapter 7, Chapter 11) and the pros and cons of each option.</li>
                <li>Helping clients prepare and file bankruptcy petitions and schedules, including gathering and organizing financial documents.</li>
                <li>Representing clients in court and working with the bankruptcy trustee to ensure that the client's assets are protected and that their debts are discharged or reorganized in a fair and equitable manner.</li>
                <li>Communicating with mortgage lenders and other creditors on behalf of clients to negotiate payment plans and other resolutions.</li>
                <li>Monitoring the progress of clients' bankruptcy cases and providing ongoing support and guidance throughout the process.</li>
                <li>Keeping up-to-date with changes in bankruptcy laws and regulations, and ensuring compliance with all relevant laws and guidelines.</li>
                <li>Providing education and resources to clients on how to rebuild credit after bankruptcy and manage their finances in the future.</li>
                <li>Collaborating with other team members and professionals, such as attorneys and financial advisors, to provide comprehensive and effective solutions for clients.</li>
                <li>Maintaining accurate and up-to-date records of client interactions and case progress to ensure compliance with regulatory and legal requirements.</li>
              </ul>    
    
            </div>
          </div>
        </div>
      </div>
      
      <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => scrollToSection('projects')}
        />
</section>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <section id="projects">
        <h1 className="title">Projects</h1>
        <p className="section__text__p1">Browse My Recent</p>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={project1Image}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">1-Basic Website</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open('https://gangadharpr.github.io/GSM-Website', '_blank')}
                >
                  GitHub
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open('https://gangadharpr.github.io/GSM-Website', '_blank')}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={project2Image}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">2-Basic Website</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open('https://gangadharpr.github.io/GSM-Website', '_blank')}
                >
                  GitHub
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open('https://gangadharpr.github.io/GSM-Website', '_blank')}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={project3Image}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">3-Basic Website</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open('https://gangadharpr.github.io/GSM-Website', '_blank')}
                >
                  GitHub
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open('https://gangadharpr.github.io/GSM-Website', '_blank')}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => scrollToSection('Skills')}
        />
        </section>

        <section id="Skills">
      <div style={{ textAlign: 'center' }}>
        <h1>Exploring my</h1>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div style={{ display: 'inline-block' }}>
                <ul>
                <li>Assessing the financial situation of clients and determining their eligibility for bankruptcy filing.</li>
                <li>Advising clients on the different types of bankruptcy (Chapter 13, Chapter 7, Chapter 11) and the pros and cons of each option.</li>
                <li>Helping clients prepare and file bankruptcy petitions and schedules, including gathering and organizing financial documents.</li>
                <li>Representing clients in court and working with the bankruptcy trustee to ensure that the client's assets are protected and that their debts are discharged or reorganized in a fair and equitable manner.</li>
                <li>Communicating with mortgage lenders and other creditors on behalf of clients to negotiate payment plans and other resolutions.</li>
                <li>Monitoring the progress of clients' bankruptcy cases and providing ongoing support and guidance throughout the process.</li>
                <li>Keeping up-to-date with changes in bankruptcy laws and regulations, and ensuring compliance with all relevant laws and guidelines.</li>
                <li>Providing education and resources to clients on how to rebuild credit after bankruptcy and manage their finances in the future.</li>
                <li>Collaborating with other team members and professionals, such as attorneys and financial advisors, to provide comprehensive and effective solutions for clients.</li>
                <li>Maintaining accurate and up-to-date records of client interactions and case progress to ensure compliance with regulatory and legal requirements.</li>
              </ul>  
              </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => scrollToSection('Contact')}
        />
    </section>
  
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p><a href="mailto:vgangadhar770@gmail.com">vgangadhar770@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn icon"
              className="icon contact-icon"
              onClick={openLinkedInProfile}
            />
            <p><a href="https://www.linkedin.com/in/gangadharam-vaddi-0a6271232">LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Gangadharam Vaddi. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Portfolio;
