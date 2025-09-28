import React from "react";
import '../assets/styles/Project.scss';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

function ContactCards() {
  return (
    <div className="projects-container" id="contact-cards">
      <h1>Contact</h1>
      <div className="projects-grid">
        
        {/* Email Card */}
        <div className="project">
          <h2>Email Me</h2>
          <p>kayaks0807@gmail.com</p>
          <a href="mailto:kayaks0807@gmail.com" className="github-icon">
            <EmailIcon fontSize="large" />
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="project">
          <h2>LinkedIn</h2>
          <p>Connect with me on LinkedIn</p>
          <a href="https://www.linkedin.com/in/seth-kay-nakashima-a96008269/" target="_blank" rel="noreferrer" className="github-icon">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>

        {/* GitHub Card */}
        <div className="project">
          <h2>GitHub</h2>
          <p>@naykakashima</p>
          <a href="https://github.com/naykakashima" target="_blank" rel="noreferrer" className="github-icon">
            <GitHubIcon fontSize="large" />
          </a>
        </div>

        {/* CV Download Card */}
        <div className="project">
          <h2>Download CV</h2>
          <p>Click below to download my resume</p>
          <Button 
            variant="contained" 
            size="small" 
            href="../assets/Resume.pdf"
            download={true}
          >
            Download
          </Button>
        </div>

      </div>
    </div>
  )
}

export default ContactCards;
