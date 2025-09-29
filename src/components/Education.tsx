import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Education.scss';

const IS1Details = [
  "International Stage One (IS1) — April 2024 to September 2024",
  "Completed foundational Computing coursework at International College Dundee to progress directly into Year 2",
  "Progressed with a First-Class Overall Grade"
];


const Year2Modules = [
  "Employability for Computing Professionals",
  "Introduction to Artificial Intelligence and Machine Learning (ML)",
  "Multi-Paradigm Programming",
  "Operating Systems",
  "Software Engineering",
  "Database Systems",
  "Modern Web Stack Development",
  "User Interface Design "
];

const Year3Modules = [
  "Information and Network Security",
  "Data Visualisation Analytics",
  "Mobile App Development",
  "Industrial Team Project"
];

function Education() {
  return (
    <div className="container" id="education">
        <h1>Education</h1>
      <div className="education-container">
        <div className="education-grid">
            <div className="education-card">
                <h2>
                <FontAwesomeIcon icon={faGraduationCap} size="1x" className="edu-icon" />
                University of Dundee, Dundee, Scotland
                </h2>
                <p>BSc (Hons) Computer Science: Data Science and AI — Expected 2027</p>
                <p>Predicted First-Class Honours (Grade Band A5 / 19 on 23-point Scottish scale)</p>

            <div className="education-section">
              <h3>International Stage One (IS1)</h3>
              <ul>
                {IS1Details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="education-section">
              <h3>2nd Year Modules</h3>
              <ul>
                {Year2Modules.map((mod, index) => (
                  <li key={index}>{mod}</li>
                ))}
              </ul>
            </div>

            <div className="education-section">
              <h3>3rd Year Modules</h3>
              <ul>
                {Year3Modules.map((mod, index) => (
                  <li key={index}>{mod}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
