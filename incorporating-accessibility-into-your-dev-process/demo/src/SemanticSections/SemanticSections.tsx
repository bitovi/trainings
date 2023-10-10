import React from "react";

import styles from "./SemanticSections.module.css";

const SemanticSections = () => {
  return (
    <section className={styles.semanticSections}>
      <div className="top">
        <p><a href="https://www.bitovi.com">Bitovi</a></p>
      </div>
      <div className="links">
        <ul>
          <li><a href="https://www.bitovi.com/digital-consulting-services">Services</a></li>
          <li><a href="https://www.bitovi.com/web-application-consulting-work">Client Work</a></li>
          <li><a href="https://www.bitovi.com/about">Our Team</a></li>
          <li><a href="https://www.bitovi.com/blog">Blog</a></li>
          <li><a href="https://www.bitovi.com/academy/">Academy</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>An exceptional app is essential to your success</h1>
        <p>
          If you’re looking for a collaborative, validation-driven team of experts who can
          help you swiftly deliver your next app, you’ve found us. How can we help?
        </p>
        <h2>Building Yum!’s global ecommerce platform from the ground up</h2>
        <p>
          Yum! came to us with a big, audacious goal: to build a global ecommerce platform
          to power their four major brands across 50,000 locations in 145 countries.
          From building the infrastructure to scaling a team to launch, Yum! says we were
          the perfect partner to help them deliver on this ambitious project.
        </p>
      </div>
      <div className="sidebar">
        <h2>Community • Tools • Resources</h2>
        <h3>App Development Checklists</h3>
        <p>
          <a href="https://www.bitovi.com/downloads/web-app-development-checklist">
            Download our free tools for making great applications!
          </a>
        </p>
        <h3>Talk with us on Discord</h3>
        <p><a href="https://discord.gg/J7ejFsZnJ4">Join the Bitovi server</a></p>
      </div>
      <div className="bottom">
        <h2>Contact Bitovi</h2>
        <p><a href="mailto:contact@bitovi.com">contact@bitovi.com</a></p>
      </div>
    </section>
  );
};

export default SemanticSections;