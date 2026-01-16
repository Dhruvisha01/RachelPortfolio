// src/pages/ProofpointCaseStudy.jsx
import React from "react";
import "./home.css";
import "../components/caseStudy.css";
import Header from "../components/Header";

function ProofpointCaseStudy() {
  return (
    <div className="home">
      <Header />

      <main id="main-content" className="container py-5">
        {/* Back link */}
        <a href="/" className="case-back-link epilogue-regular">
          ← Back to Home
        </a>

        {/* HERO SECTION */}
        <header className="case-hero mb-5">
          <p className="case-client-label epilogue-semibold">PROOFPOINT</p>
          <h1 className="epilogue-semibold case-title">Proofpoint</h1>
          <p className="epilogue-regular case-subtitle">
            In a world where digital threats are increasingly diverse and
            sophisticated, a very large percentage of cybersecurity incidents
            can be traced to human error. I was assigned to the cybersecurity
            awareness team. Proofpoint's flagship cybersecurity awareness
            product involves sending mock phishing emails to employees. When an
            employee falls for the mock attack, they are redirected to a
            "landing page".
          </p>

          {/* Section nav */}
          <nav
            className="case-section-nav"
            aria-label="Case study sections navigation"
          >
            <ul>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#my-role">My Role</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#outcomes">Outcomes</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* META STRIP */}
        <section className="case-meta mb-5" aria-label="Project details">
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">
              Project Duration
            </h2>
            <p className="epilogue-regular">To be updated</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">Role</h2>
            <p className="epilogue-regular">UX Researcher & Designer</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">Team</h2>
            <p className="epilogue-regular">
              Proofpoint Cybersecurity Awareness Team
            </p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section
          id="overview"
          className="case-section mb-5"
          aria-labelledby="overview-heading"
        >
          <h2 id="overview-heading" className="epilogue-semibold">
            Overview
          </h2>
          <p className="epilogue-regular">
            Human error remains one of the leading causes of cybersecurity
            breaches. Proofpoint's cybersecurity awareness platform helps
            organizations train employees to recognize and avoid phishing
            attacks. The landing page that users see after falling for a mock
            phishing email is a critical touchpoint for education and behavior
            change. This project focused on improving the design and
            effectiveness of these educational landing pages.
          </p>
        </section>

        {/* MY ROLE */}
        <section
          id="my-role"
          className="case-section mb-5"
          aria-labelledby="my-role-heading"
        >
          <h2 id="my-role-heading" className="epilogue-semibold">
            My Role
          </h2>
          <p className="epilogue-regular">
            As a UX Researcher and Designer on the cybersecurity awareness team,
            I conducted research to understand how users interact with phishing
            landing pages, designed wireframes for improved educational
            experiences, and worked to create more effective learning moments
            that help users recognize and avoid real threats.
          </p>

          <div className="case-tag-row">
            <span className="case-tag">Wireframing</span>
            <span className="case-tag">UX Research</span>
            <span className="case-tag">Educational design</span>
            <span className="case-tag">Behavior change</span>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="case-section mb-5"
          aria-labelledby="process-heading"
        >
          <h2 id="process-heading" className="epilogue-semibold">
            Process
          </h2>

          <ol className="epilogue-regular case-timeline">
            <li>
              <h3>Research</h3>
              <p>
                Analyzed user behavior data from mock phishing campaigns to
                understand how employees interact with landing pages and what
                information is most effective for learning.
              </p>
            </li>
            <li>
              <h3>Design</h3>
              <p>
                Created wireframes for landing pages that balance educational
                content with user engagement, ensuring the teachable moment is
                maximized without overwhelming users.
              </p>
            </li>
            <li>
              <h3>Iterate</h3>
              <p>
                Refined designs based on feedback from security teams and
                usability testing, focusing on clarity and actionable takeaways
                for users.
              </p>
            </li>
            <li>
              <h3>Test</h3>
              <p>
                Collaborated with the team to test different landing page
                variations and measure their impact on user learning and future
                behavior.
              </p>
            </li>
          </ol>
        </section>

        {/* OUTCOMES */}
        <section
          id="outcomes"
          className="case-section mb-5"
          aria-labelledby="outcomes-heading"
        >
          <h2 id="outcomes-heading" className="epilogue-semibold">
            Outcomes
          </h2>

          <p className="epilogue-regular">
            The redesigned landing pages improved the educational effectiveness
            of Proofpoint's cybersecurity awareness platform, helping users
            better understand phishing threats and how to avoid them.
          </p>

          <div className="case-highlight-grid" aria-label="Key outcomes">
            <article className="case-highlight-card">
              <h3>Improved educational clarity</h3>
              <p>
                Designed landing pages that clearly explain what went wrong and
                why, making the learning moment more impactful and memorable for
                users.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>Better engagement</h3>
              <p>
                Created wireframes that maintain user attention and encourage
                interaction with educational content, rather than immediately
                dismissing the page.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>Actionable takeaways</h3>
              <p>
                Structured content to provide clear, actionable guidance that
                users can apply to recognize and avoid real phishing attempts in
                the future.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProofpointCaseStudy;
