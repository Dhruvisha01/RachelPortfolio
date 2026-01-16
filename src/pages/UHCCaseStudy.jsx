// src/pages/UHCCaseStudy.jsx
import React from "react";
import "./home.css";
import "../components/caseStudy.css";
import Header from "../components/Header";

function UHCCaseStudy() {
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
            UNIVERSITY HOSPITALS OF CLEVELAND
          </p>
          <h1 className="epilogue-semibold case-title">
            Healing at Home: Enhancing Post-operative Care for Skin Cancer
            Patients
          </h1>
          <p className="epilogue-regular case-subtitle">
            Working alongside University Hospitals of Cleveland, we tackled the
            challenge of improving at-home patient-administered wound care after Mohs skin cancer surgery.
            This case study walks through the research, key
            design decisions, and outcomes.
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
            <p className="epilogue-regular">January 2024 – July 2024</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">Role</h2>
            <p className="epilogue-regular">UX Researcher &amp; Designer</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">
              Team Members
            </h2>
            <p className="epilogue-regular">
              Claire Cheong, Tina Chen, Sophie Davis, Joanne Yang
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
            In this project, our team focused on understanding breakdowns
            between clinic instructions and real at-home wound care practices.
            We used qualitative interviews, journey mapping, and co-design
            sessions to surface pain points and opportunity areas.
          </p>

          {/* Example: Full-width hero image */}
          <div className="case-image-wrapper">
            <img
              src="/patient-journey-map.png"
              alt="Wound care research process"
              className="case-hero-image"
            />
            <p className="case-image-caption">
              Research process showing patient journey mapping and pain point
              identification
            </p>
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
            I served as a UX Researcher and Designer, leading research planning,
            synthesizing findings into actionable insights, and co-designing
            both patient-facing and clinician-facing tools to support safe,
            confident wound care at home.
          </p>

          <div className="case-tag-row">
            <span className="case-tag">Research planning</span>
            <span className="case-tag">Qualitative synthesis</span>
            <span className="case-tag">Interaction design</span>
            <span className="case-tag">Service design</span>
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
                Conducted stakeholder interviews with surgeons, nurses, and
                clinic staff to understand current workflows and breakdowns.
              </p>
              {/* Example: Inline image with text */}
              <div className="case-image-text">
                <div className="case-image-content">
                  <p>
                    Through interviews, we identified key breakdown points in
                    the communication between healthcare providers and patients
                    regarding wound care instructions.
                  </p>
                </div>
                <div className="case-image-visual">
                  <img
                    src="/stakeholders.png"
                    alt="Stakeholder interview insights"
                  />
                </div>
              </div>
            </li>
            <li>
              <h3>Understand</h3>
              <p>
                Interviewed patients and mapped the clinic-to-home journey to
                identify where instructions were misunderstood or forgotten.
              </p>
            </li>
            <li>
              <h3>Design</h3>
              <p>
                Co-designed low- and mid-fidelity prototypes, including
                step-by-step wound-care guidance, photo capture flows, and
                escalation paths.
              </p>
              {/* Example: Centered image with caption */}
              <div className="case-image-wrapper">
                <img
                  src="/lofiPrototypes.png"
                  alt="Wound care prototype designs"
                  className="case-image"
                />
                <p className="case-image-caption">
                  Low-fidelity prototypes for step-by-step wound care guidance
                </p>
              </div>
            </li>
            <li>
              <h3>Test &amp; Iterate</h3>
              <p>
                Ran usability sessions with patients and clinicians, iterating
                on clarity, tone, and how we presented visual wound examples.
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
            We delivered validated design concepts and recommendations for
            clearer wound-care instructions, photo-based guidance, and
            lightweight communication paths between patients and clinic staff to
            catch complications earlier.
          </p>

          <div className="case-highlight-grid" aria-label="Key outcomes">
            <article className="case-highlight-card">
              <h3>Clearer at-home instructions</h3>
              <p>
                Reframed wound-care steps into plain language with visuals and
                time-based reminders that aligned with patients&apos; real
                routines at home.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>Photo-based guidance</h3>
              <p>
                Designed flows for patients to compare their wound against
                curated examples and submit photos when they weren&apos;t sure
                if something looked normal.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>Earlier issue detection</h3>
              <p>
                Proposed a lightweight clinic inbox concept so nurses could
                quickly triage concerning photos and follow up before issues
                became emergencies.
              </p>
            </article>
          </div>

          {/* Example: Image gallery */}
          <div className="case-image-gallery">
            <img src="/Cura.png" alt="Final design outcome 1" />
            <img src="/woundCareRedesign.png" alt="Final design outcome 2" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default UHCCaseStudy;
