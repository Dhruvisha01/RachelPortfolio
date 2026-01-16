// src/pages/ClientViewCaseStudy.jsx
import React from "react";
import "./home.css";
import "../components/caseStudy.css";
import Header from "../components/Header";

function ClientViewCaseStudy() {
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
          <p className="case-client-label epilogue-semibold">
            ALLEGHENY COUNTY
          </p>
          <h1 className="epilogue-semibold case-title">
            Redesigning ClientView, Allegheny County
          </h1>
          <p className="epilogue-regular case-subtitle">
            ClientView is a platform used by frontline caseworkers to access
            behavioral health, housing, and service history data. I am leading
            the redesign of the system to streamline complex workflows and make
            critical information easier to find and act on. By collaborating
            closely with caseworkers and internal teams, I aim to reduce
            cognitive load, improve data clarity, and support faster, more
            informed decision-making in high-stakes social service environments.
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
            <p className="epilogue-regular">Ongoing</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">Role</h2>
            <p className="epilogue-regular">Lead UX Designer & Researcher</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">Team</h2>
            <p className="epilogue-regular">
              Allegheny County internal teams and caseworkers
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
            ClientView is a critical tool for caseworkers in Allegheny County
            who provide essential social services. The platform aggregates
            complex data from multiple systems—behavioral health records,
            housing information, and service history—into a single interface.
            The redesign focuses on making this information more accessible,
            reducing the time caseworkers spend searching for data, and enabling
            them to make faster, more informed decisions that directly impact
            the lives of the people they serve.
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
            As the lead UX Designer and Researcher, I am responsible for
            understanding the complex workflows of caseworkers, identifying pain
            points in the current system, and designing solutions that reduce
            cognitive load while improving efficiency. I collaborate closely
            with caseworkers through interviews and co-design sessions, and work
            with internal teams to ensure the redesign meets both user needs and
            organizational requirements.
          </p>

          <div className="case-tag-row">
            <span className="case-tag">User research</span>
            <span className="case-tag">Workflow design</span>
            <span className="case-tag">Information architecture</span>
            <span className="case-tag">Stakeholder collaboration</span>
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
              <h3>Discover</h3>
              <p>
                Conducted in-depth interviews with caseworkers to understand
                their daily workflows, pain points, and how they currently
                navigate the ClientView system to find critical information.
              </p>
            </li>
            <li>
              <h3>Analyze</h3>
              <p>
                Mapped complex information flows and identified bottlenecks
                where caseworkers struggle to find or act on data, particularly
                in time-sensitive situations.
              </p>
            </li>
            <li>
              <h3>Design</h3>
              <p>
                Created new information architecture and interface designs that
                prioritize the most critical information, streamline workflows,
                and reduce cognitive load through clear visual hierarchy and
                intuitive navigation.
              </p>
              {/* Example: Image with text */}
              <div className="case-image-text">
                <div className="case-image-content">
                  <p>
                    The redesigned interface focuses on making critical client
                    information immediately accessible, reducing the time
                    caseworkers spend searching through multiple screens.
                  </p>
                </div>
                <div className="case-image-visual">
                  <img src="/DP2A.png" alt="ClientView redesign interface" />
                </div>
              </div>
            </li>
            <li>
              <h3>Collaborate & Iterate</h3>
              <p>
                Worked closely with caseworkers and internal teams through
                co-design sessions and usability testing, iterating on designs
                to ensure they meet real-world needs in high-stakes
                environments.
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
            The redesign process is creating a more efficient and user-friendly
            ClientView system that empowers caseworkers to serve their clients
            more effectively.
          </p>

          <div className="case-highlight-grid" aria-label="Key outcomes">
            <article className="case-highlight-card">
              <h3>Reduced cognitive load</h3>
              <p>
                Redesigned information architecture and visual hierarchy to make
                critical data easier to find and understand, reducing the mental
                effort required to navigate complex client information.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>Streamlined workflows</h3>
              <p>
                Simplified common tasks and workflows, enabling caseworkers to
                access and act on information more quickly, especially in
                time-sensitive situations.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>Improved data clarity</h3>
              <p>
                Enhanced how information is presented and organized, making it
                easier for caseworkers to understand relationships between
                different data points and make informed decisions.
              </p>
            </article>
          </div>

          <p className="epilogue-regular mt-4">
            <a
              href="https://medium.com/@rachsadeh/designing-clarity-in-complexity-improving-how-human-services-connect-across-allegheny-county-c92f0a148bfe"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Read more about this project on Medium →
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default ClientViewCaseStudy;
