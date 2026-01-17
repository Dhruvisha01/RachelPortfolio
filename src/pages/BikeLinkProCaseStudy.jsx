// src/pages/BikeLinkProCaseStudy.jsx
import React from "react";
import "./home.css";
import "../components/caseStudy.css";
import Header from "../components/Header";

function BikeLinkProCaseStudy() {
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
            MOBILITY & TRANSPORTATION DESIGN
          </p>
          <h1 className="epilogue-semibold case-title">
            BikeLinkPro, Designing the Future of E-Bikes
          </h1>
          <p className="epilogue-regular case-subtitle">
            Imagine a world where your daily commute is effortless,
            eco-friendly, and intelligent. Welcome to BikeLinkPro, the e-bike of
            the future. Through a rigorous process of user feedback and rapid
            prototyping, we designed both physical and digital interfaces for
            semi-autonomous e-bikes, refining usability, safety, and
            functionality to redefine urban mobility.
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
            <p className="epilogue-regular">UX Designer & Researcher</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">Team</h2>
            <p className="epilogue-regular">Design team</p>
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
            BikeLinkPro represents a vision for the future of urban
            transportation—semi-autonomous e-bikes that combine the benefits of
            cycling with intelligent assistance and connectivity. This project
            involved designing both the physical interface elements on the bike
            itself and the digital companion app, creating a seamless experience
            that prioritizes safety, usability, and user enjoyment.
          </p>

          {/* Example: Two column image layout */}
          <div className="case-image-two-col">
            <img src="/DP1A.png" alt="Physical bike interface design" />
            <img src="/DP1B.png" alt="Digital companion app interface" />
          </div>
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
            As a UX Designer and Researcher, I led user research activities to
            understand commuter needs, designed both physical and digital
            interfaces, and conducted rapid prototyping and testing cycles to
            refine the design based on real user feedback.
          </p>

          <div className="case-tag-row">
            <span className="case-tag">User research</span>
            <span className="case-tag">Physical interface design</span>
            <span className="case-tag">Digital interface design</span>
            <span className="case-tag">Rapid prototyping</span>
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
                Conducted interviews and observations with urban commuters to
                understand their transportation needs, pain points, and
                expectations for e-bike technology.
              </p>
            </li>
            <li>
              <h3>Ideate</h3>
              <p>
                Explored concepts for both physical bike interfaces (displays,
                controls) and digital companion features (navigation, safety
                alerts, ride tracking).
              </p>
            </li>
            <li>
              <h3>Prototype</h3>
              <p>
                Created rapid prototypes of key interactions, testing both
                physical mockups and digital interfaces with users to gather
                early feedback.
              </p>
            </li>
            <li>
              <h3>Refine</h3>
              <p>
                Iterated on designs based on user feedback, focusing on
                usability, safety, and creating an enjoyable riding experience
                that encourages sustainable transportation.
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
            The design process resulted in a comprehensive vision for
            BikeLinkPro, with both physical and digital interfaces that work
            together to create a safe, intuitive, and enjoyable e-bike
            experience.
          </p>

          <div className="case-highlight-grid" aria-label="Key outcomes">
            <article className="case-highlight-card">
              <h3>Integrated physical-digital experience</h3>
              <p>
                Designed seamless interactions between the bike's physical
                interface and the companion app, ensuring information and
                controls are accessible where users need them most.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>Safety-first design</h3>
              <p>
                Prioritized safety in all interface decisions, from clear visual
                indicators on the bike to intelligent alerts in the app that
                help riders navigate safely.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>User-centered functionality</h3>
              <p>
                Created features that address real commuter needs, from
                intelligent route planning to battery management, making
                e-biking a practical and appealing transportation option.
              </p>
            </article>
          </div>

          <p className="epilogue-regular mt-4">
            <a
              href="https://medium.com/@rachsadeh/bikelinkpro-designing-the-future-of-e-bikes-454878311582"
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

export default BikeLinkProCaseStudy;
