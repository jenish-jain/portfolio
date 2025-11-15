import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { resumeMarkdown } from '../../data/resumeContent';
import { parseResume } from '../../utils/resumeParser';
import { MarkdownText } from './MarkdownText';
import './style.css';

const Resume = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  // Parse markdown content
  const resumeData = useMemo(() => parseResume(resumeMarkdown), []);
  const { personal, experience, projects, skills, education } = resumeData;

  return (
    <div className="resume-page">
      <Helmet>
        <title>Jenish Jain - Resume</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Back Navigation */}
      <a href="#/" className="back-link no-print">
        ← Back to Portfolio
      </a>

      <div className="resume-container">
        <button className="download-btn no-print" onClick={handleDownloadPDF}>
          Download as PDF
        </button>

        <div className="resume-content">
          {/* Header Section */}
          <header className="resume-header">
            <h1>{personal.name}</h1>
            <div className="contact-info">
              <div className="contact-row">
                <a href={`https://${personal.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {personal.linkedin}
                </a>
                <span>•</span>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="contact-row">
                <a href={`https://${personal.website}`} target="_blank" rel="noopener noreferrer">
                  {personal.website}
                </a>
                <span>•</span>
                <span>{personal.phone}</span>
                <span>•</span>
                <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer">
                  {personal.github}
                </a>
              </div>
            </div>
          </header>

          {/* Experience Section */}
          <section className="resume-section">
            <h2>Experience</h2>

            {experience.map((exp, index) => {
              const isFirstPosition = index === 0;
              const isContinuation = index > 0 && exp.company === experience[index - 1].company;

              return (
                <div
                  key={index}
                  className={`experience-item ${isContinuation ? 'continuation' : ''}`}
                >
                  <div className="experience-header">
                    <div>
                      {!isContinuation && <h3>{exp.company}</h3>}
                      <p className="position">{exp.title}</p>
                    </div>
                    <div className="experience-meta">
                      {!isContinuation && <p className="location">{exp.location}</p>}
                      <p className="date">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="experience-details">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>
                        <MarkdownText text={highlight} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>

          {/* Projects Section */}
          <section className="resume-section">
            <h2>Personal Projects</h2>

            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <h3>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p>{project.description}</p>
              </div>
            ))}
          </section>

          {/* Skills Section */}
          <section className="resume-section">
            <h2>Skills</h2>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <strong>{skill.category}:</strong> {skill.items}
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          {education && (
            <section className="resume-section">
              <h2>Education</h2>

              <div className="education-item">
                <div className="education-header">
                  <div>
                    <h3>{education.school}</h3>
                    <p className="degree">{education.degree}</p>
                  </div>
                  <div className="education-meta">
                    <p className="location">{education.location}</p>
                    <p className="date">{education.period}</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
