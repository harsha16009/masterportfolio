import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import Button from "../../components/button/Button";
import { greeting, certifications, socialMediaLinks } from "../../portfolio";
import TopButton from "../../components/topButton/TopButton";

export default class ResumePage extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="resume-main">
        <Header theme={theme} />
        <div className="resume-view">
          <Fade bottom duration={2000} distance="40px">
            <div className="resume-container">
              <div className="download-btn">
                <Button
                  text="📃 Download Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>

              <div
                className="resume-paper"
                style={{ backgroundColor: "#FFFFFF", color: "#333" }}
              >
                <header className="resume-header">
                  <h1 className="resume-name" style={{ color: "#2E5B9A" }}>
                    Harsha Vardhan
                  </h1>
                  <div className="resume-contact">
                    <p>
                      LinkedIn:{" "}
                      <a
                        href={socialMediaLinks.find(s => s.name === "LinkedIn").link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {socialMediaLinks.find(s => s.name === "LinkedIn").link.split("/in/")[1].replace("/", "")}
                      </a>{" "}
                      | Email:{" "}
                      <a href="mailto:allamsetti.harsha2004@gmail.com">
                        allamsetti.harsha2004@gmail.com
                      </a>
                    </p>
                    <p>
                      GitHub:{" "}
                      <a
                        href="https://github.com/harsha16009"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/harsha16009
                      </a>{" "}
                      | Mobile: +91-8179730596
                    </p>
                  </div>
                </header>

                <section className="resume-section">
                  <h2 className="section-title">SKILLS</h2>
                  <div className="section-content">
                    <p>
                      <strong>Languages :</strong> C++, Java, Python,
                      JavaScript, C
                    </p>
                    <p>
                      <strong>Frontend :</strong> HTML, CSS, React.js, Tailwind
                      CSS
                    </p>
                    <p>
                      <strong>Backend :</strong> Flask, Express.js, MySQL,
                      MongoDB
                    </p>
                    <p>
                      <strong>Cloud/DevOps :</strong> AWS, Docker, Apache
                      CloudStack, Azure
                    </p>
                    <p>
                      <strong>Soft Skills :</strong> Problem-Solving, Team
                      Collaboration, Innovative
                    </p>
                  </div>
                </section>

                <section className="resume-section">
                  <h2 className="section-title">PROJECTS</h2>
                  <div className="project-item">
                    <div className="project-header">
                      <h3>Library Tracker | HTML, CSS, JS, DSA</h3>
                      <span>Jun 2025-Jul 2025</span>
                    </div>
                    <ul>
                      <li>
                        Designed and developed a digital library management
                        system using HTML, CSS, JavaScript, and Firebase for
                        real-time book tracking and secure user handling.
                      </li>
                      <li>
                        Automated borrow/return workflows, reducing manual
                        tracking effort by 50% and minimizing data
                        inconsistencies.
                      </li>
                      <li>
                        Implemented optimized search and retrieval using
                        Hashing, improving book lookup speed by 40%
                      </li>
                      <li>
                        Repository Link:{" "}
                        <a
                          href="https://github.com/harsha16009/Library-Trackers2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/harsha16009/Library-Trackers2
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="project-item">
                    <div className="project-header">
                      <h3>
                        YouTube Video Search App (Cloud API Integration) | MERN
                        Stack
                      </h3>
                      <span>Jan 2025-Mar 2025</span>
                    </div>
                    <ul>
                      <li>
                        Built a cloud-integrated web application that retrieves
                        video data using the YouTube Data API.
                      </li>
                      <li>
                        Implemented asynchronous API calls to fetch and render
                        video search results dynamically.
                      </li>
                      <li>
                        Applied component-based architecture in React for
                        scalable UI development.
                      </li>
                      <li>
                        Repository Link:{" "}
                        <a
                          href="https://harsha16009.github.io/react_youtube/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://harsha16009.github.io/react_youtube/
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="project-item">
                    <div className="project-header">
                      <h3>Giphy Search | HTML, CSS, JS, API</h3>
                      <span>Sep 2023-Dec 2023</span>
                    </div>
                    <ul>
                      <li>
                        Developed an interactive GIF Search Engine using
                        JavaScript and the GIPHY API, enabling real-time search,
                        trending content display, and optimized media loading.
                      </li>
                      <li>
                        Implemented a custom GIF creation module allowing users
                        to upload multiple images and generate animated GIFs
                        dynamically through the gifshot library.
                      </li>
                      <li>
                        Engineered a modern UI with animated visual effects,
                        responsive design, and advanced features such as
                        download, preview, and link-sharing to enhance user
                        engagement.
                      </li>
                      <li>
                        Link:{" "}
                        <a
                          href="https://harsha16009.github.io/gihy-search/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://harsha16009.github.io/gihy-search/
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="resume-section">
                  <h2 className="section-title">TRAINING</h2>
                  <div className="project-item">
                    <div className="project-header">
                      <h3>Data Structures and Algorithms with Java</h3>
                      <span>Jun 2025-Jul 2025</span>
                    </div>
                    <ul>
                      <li>
                        Completed an intensive Summer Training Program at Cipher
                        Schools, achieving top performance across project
                        evaluations and technical assessments.
                      </li>
                      <li>
                        Gained advanced proficiency through real-world projects,
                        focusing on problem-solving, clean code practices, and
                        industry-standard tools.
                      </li>
                      <li>
                        Demonstrated excellence in teamwork, innovation, and
                        technical execution, significantly strengthening my
                        professional and placement readiness.
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="resume-section">
                  <h2 className="section-title">CERTIFICATES</h2>
                  <div className="certificate-list">
                    {certifications.certifications.map((cert, index) => (
                      <div className="certificate-item" key={index}>
                        <span>
                          • {cert.title}{" "}
                          <a
                            href={cert.certificate_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#2E5B9A" }}
                          >
                            {cert.subtitle === "Certificate" ? "View Certificate" : cert.subtitle}
                          </a>
                        </span>
                        <span>{cert.duration || "Jan 2026"}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="resume-section">
                  <h2 className="section-title">ACHIEVEMENTS</h2>
                  <div className="certificate-list">
                    <div className="certificate-item">
                      <span>
                        • Achieved Gold League status on Coding Ninjas for
                        Coding | Code 360
                      </span>
                      <span>Nov 2025</span>
                    </div>
                    <div className="certificate-item">
                      <span>
                        • Top Ranker of the week in Problem-Solving | LeetCode
                      </span>
                      <span>Oct 2025</span>
                    </div>
                  </div>
                </section>

                <section className="resume-section">
                  <h2 className="section-title">EDUCATION</h2>
                  <div className="education-item">
                    <div className="edu-header">
                      <strong>Lovely Professional University</strong>
                      <span>Punjab, India</span>
                    </div>
                    <div className="edu-sub">
                      <em>
                        Bachelor of Technology - Computer Science and
                        Engineering; <strong>CGPA: 7.0</strong>
                      </em>
                      <span>Since Aug 2023</span>
                    </div>
                  </div>
                  <div className="education-item">
                    <div className="edu-header">
                      <strong>Narayana Junior College</strong>
                      <span>Vijayawada, Andhra Pradesh</span>
                    </div>
                    <div className="edu-sub">
                      <em>
                        Intermediate; <strong>Percentage: 94.4</strong>
                      </em>
                      <span>Apr 2021-Mar 2023</span>
                    </div>
                  </div>
                  <div className="education-item">
                    <div className="edu-header">
                      <strong>Viswasanthi High School</strong>
                      <span>Bhattiprolu, Guntur</span>
                    </div>
                    <div className="edu-sub">
                      <em>
                        Matriculation; <strong>Percentage: 91</strong>
                      </em>
                      <span>Apr 2020-Mar 2021</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
