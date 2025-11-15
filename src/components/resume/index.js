import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css';

const Resume = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      <Helmet>
        <title>Jenish Jain - Resume</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Back Navigation */}
      <a href="/" className="back-link no-print">
        ← Back to Portfolio
      </a>

      <div className="resume-container">
        <button className="download-btn no-print" onClick={handleDownloadPDF}>
          Download as PDF
        </button>

        <div className="resume-content">
          {/* Header Section */}
          <header className="resume-header">
            <h1>Jenish Jain</h1>
            <div className="contact-info">
              <div className="contact-row">
                <a href="https://www.linkedin.com/in/jenish-jain/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/jenish-jain
                </a>
                <span>•</span>
                <a href="mailto:jenishjain6@gmail.com">jenishjain6@gmail.com</a>
              </div>
              <div className="contact-row">
                <a href="https://jenishjain.in/" target="_blank" rel="noopener noreferrer">
                  jenishjain.in
                </a>
                <span>•</span>
                <span>+91-7567536303</span>
                <span>•</span>
                <a href="https://github.com/jenish-jain" target="_blank" rel="noopener noreferrer">
                  github.com/jenish-jain
                </a>
              </div>
            </div>
          </header>

          {/* Experience Section */}
          <section className="resume-section">
            <h2>Experience</h2>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>Rapido</h3>
                  <p className="position">Senior Product Engineer 2 (Infrastructure & Backend)</p>
                </div>
                <div className="experience-meta">
                  <p className="location">Bengaluru, Karnataka</p>
                  <p className="date">Jan 2025 - Present</p>
                </div>
              </div>
              <ul className="experience-details">
                <li>
                  <strong>Database & Infrastructure Leadership:</strong> Spearheaded end-to-end database operations for <strong>20+ MongoDB clusters</strong>, executing <strong>zero-downtime upgrades</strong>, dynamic resizing, and performance & index tuning. Provisioned and managed distributed infrastructure including Redis, Cloud functions, Cloud SQL streaming platforms using <strong>IaC</strong> methodologies.
                </li>
                <li>
                  <strong>CI Artifacts Management:</strong> Developed a <strong>custom GoCD plugin</strong> to optimize artifact management, <strong>reduce cloud costs & improve CI/CD availability</strong> integrated with Cloud Storage for efficient artifact storage and implemented a janitor job to clean delete surplus builds.
                </li>
                <li>
                  <strong>Platform Engineering:</strong> Debugged issues around Kubernetes, prometheus, assisted in cluster migration to improve system scalability. contributed to various in-house platform tooling improving dev experience and reducing manual effort on infra team for routine chores.
                </li>
                <li>
                  <strong>Monitoring & Observability:</strong> Built dashboard for infra cost monitoring with <strong>Google big query</strong> data, reviewed and assisted development teams to create alerts, dashboards, and custom metrics to improve observability
                </li>
              </ul>
            </div>

            <div className="experience-item continuation">
              <div className="experience-header">
                <div>
                  <p className="position">Senior Product Engineer (Full Stack)</p>
                </div>
                <div className="experience-meta">
                  <p className="date">Nov 2022 - Dec 2024</p>
                </div>
              </div>
              <ul className="experience-details">
                <li>
                  <strong>Technical Leadership:</strong> Led technical architecture decisions and mentored team of 4-5 engineers. Drove product development innovation owning 5+ critical microservices supporting millions of users with peak traffic of 500 RPS.
                </li>
                <li>
                  <strong>Ratecard Architecture Revamp:</strong> Redesigned ratecard store architecture achieving <strong>10x increased request volume capacity</strong>. Enabled business teams to experiment with geo/temporal pricing strategies, <strong>reducing time-to-market</strong> for pricing features.
                </li>
                <li>
                  <strong>Autonomous Analytics Platform:</strong> Single-handedly owned development of autonomous route-based analytics system including infra provisioning & setting observability which proved pivotal for successful cabs product launch, <strong>reducing new city launch time</strong> from month's to weeks.
                </li>
                <li>
                  <strong>Cost Optimization:</strong> Implemented dynamic TTL algorithm reducing <strong>disk costs by 55-60%</strong> while maintaining customer experience across 2M+ daily rides.
                </li>
              </ul>
            </div>

            <div className="experience-item continuation">
              <div className="experience-header">
                <div>
                  <p className="position">Product Engineer (Full-Stack)</p>
                </div>
                <div className="experience-meta">
                  <p className="date">Dec 2020 - Nov 2022</p>
                </div>
              </div>
              <ul className="experience-details">
                <li>
                  <strong>Dynamic Pricing Engine Development:</strong> Owned critical pricing engine serving 2M+ daily net ride requests at 400 RPS. Collaborated with data teams to implement dynamic pricing optimization processing 5M+ daily transactions.
                </li>
                <li>
                  <strong>Performance Engineering:</strong> Optimized fare estimation flow achieving <strong>30-40% reduction in API response times</strong>. Resolved legacy design issues improving customer experience and conversion funnels.
                </li>
                <li>
                  <strong>Enabling QA Teams for perf testing:</strong> Built a <strong>no code solution</strong> for QA teams using wiremock to stub internal API's that enabled them perform perf testing without need to scale complete non prod infra. <strong>Improving delivery velocity with reduced infra cost.</strong>
                </li>
                <li>
                  <strong>Production Operations:</strong> Managed production incidents with minimal business impact. Maintained system reliability in high-pressure environments serving millions of users.
                </li>
              </ul>
            </div>

            <div className="experience-item continuation">
              <div className="experience-header">
                <div>
                  <p className="position">Associate Product Engineer</p>
                </div>
                <div className="experience-meta">
                  <p className="date">Jun 2020 - Dec 2020</p>
                </div>
              </div>
              <ul className="experience-details">
                <li>
                  <strong>Microservices Migration:</strong> Developed core components for fare estimation, campaigns, and direction services handling 400 RPS. Led monolithic to microservices migration using canary rollouts with zero business impact.
                </li>
                <li>
                  <strong>API Development:</strong> Designed scalable APIs handling 400 RPS in production environment serving millions of users. Monitored system performance and business metrics throughout deployment processes.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects Section */}
          <section className="resume-section">
            <h2>Personal Projects</h2>

            <div className="project-item">
              <h3>
                <a href="https://medium.com/@jenishjain6/how-i-automated-tax-reporting-for-my-father-b4db1edbcbd2" target="_blank" rel="noopener noreferrer">
                  GST Automation System
                </a>
              </h3>
              <p>Built serverless Go application automating tax calculations and report generation. Reduced manual GST filing effort by 80% through automated file parsing and data processing.</p>
            </div>

            <div className="project-item">
              <h3>
                <a href="https://medium.com/@jenishjain6/from-pdfs-to-speech-my-diy-audiobook-factory-fcf12df311fe" target="_blank" rel="noopener noreferrer">
                  Audiobook Generator
                </a>
              </h3>
              <p>Developed scalable GCP Cloud Run service processing PDF uploads with text-to-speech conversion. Implemented Jenks Natural Break Optimization for content filtering.</p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="resume-section">
            <h2>Skills</h2>

            <div className="skills-grid">
              <div className="skill-item">
                <strong>Programming Languages:</strong> Go, JavaScript, Java, Python
              </div>
              <div className="skill-item">
                <strong>Databases:</strong> MongoDB, Redis, Elasticsearch, Cloud SQL
              </div>
              <div className="skill-item">
                <strong>Cloud Platforms:</strong> Google Cloud Platform, Cloud Functions, Cloud Run
              </div>
              <div className="skill-item">
                <strong>Infrastructure:</strong> Kubernetes, Docker, Helm, Terraform, Ansible, GoCD, Apache Kafka, Kong
              </div>
              <div className="skill-item">
                <strong>Monitoring:</strong> Grafana, Prometheus, Loki, Alertmanager
              </div>
              <div className="skill-item">
                <strong>Technical:</strong> System Design, Team Mentorship, Technical Architecture, Performance Optimization
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="resume-section">
            <h2>Education</h2>

            <div className="education-item">
              <div className="education-header">
                <div>
                  <h3>Sarvajanik College Of Engineering and Technology</h3>
                  <p className="degree">B.E in Electrical Engineering; CGPA: 9.06</p>
                </div>
                <div className="education-meta">
                  <p className="location">Surat, Gujarat</p>
                  <p className="date">2014-2018</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
