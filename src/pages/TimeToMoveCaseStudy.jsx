// src/pages/TimeToMoveCaseStudy.jsx
import React from "react";
import "./home.css";
import "../components/caseStudy.css";
import Header from "../components/Header";

function TimeToMoveCaseStudy() {
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
            ACCESSIBILITY & HEALTHCARE DESIGN
          </p>
          <h1 className="epilogue-semibold case-title">
            "Time to Move!": Accessible Pressure Relief Reminders for Wheelchair
            Users
          </h1>
          <p className="epilogue-regular case-subtitle">
            I designed and prototyped a multi-modal notification system to
            remind wheelchair-bound users to perform pressure relief maneuvers.
            These maneuvers can help significantly reduce the chance of
            developing potentially life-threatening ulcers.
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
            <p className="epilogue-regular">June 2022-December 2022</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">Role</h2>
            <p className="epilogue-regular">UX Designer & Researcher</p>
          </div>
          <div className="case-meta-item">
            <h2 className="epilogue-semibold case-meta-heading">Team</h2>
            <p className="epilogue-regular">Individual project</p>
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
            Pressure ulcers (bedsores) are a serious health concern for
            wheelchair users. Regular pressure relief maneuvers are essential to
            prevent these potentially life-threatening conditions. This project
            focused on designing an accessible, multi-modal notification system
            that effectively reminds users to perform these critical movements
            throughout their day.
          </p>

          {/* Example: Centered image */}
          <div className="case-image-wrapper">
            <img
              src="/alertSystemInterface.png"
              alt="Time to Move notification system"
              className="case-image"
            />
            <p className="case-image-caption">
              Multi-modal notification system interface design
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
            As the sole designer and researcher on this project, I conducted
            user research with wheelchair users, designed the notification
            system with accessibility as a core principle, and prototyped
            multi-modal interactions that accommodate different user needs and
            preferences.
          </p>

          <div className="case-tag-row">
            <span className="case-tag">User research</span>
            <span className="case-tag">Accessibility design</span>
            <span className="case-tag">Multi-modal design</span>
            <span className="case-tag">Prototyping</span>
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
                Conducted interviews with wheelchair users to understand their
                current pressure relief practices, challenges, and preferences
                for reminder systems.
              </p>
            </li>
            <li>
              <h3>Design</h3>
              <p>
                Designed a multi-modal notification system incorporating visual,
                auditory, and haptic feedback to ensure accessibility for users
                with different abilities and preferences.
              </p>
              {/* Example: Image with text (reversed) */}
              <div className="case-image-text reverse">
                <div className="case-image-content">
                  <p>
                    The design incorporates multiple notification channels to
                    ensure users never miss a critical reminder, regardless of
                    their sensory abilities or current activity.
                  </p>
                </div>
                <div className="case-image-visual">
                  <img
                    src="/lofiAlertSystem.png"
                    alt="Multi-modal notification design"
                  />
                </div>
              </div>
            </li>
            <li>
              <h3>Prototype</h3>
              <p>
                Created interactive prototypes to test different notification
                patterns, timing intervals, and interaction methods with users.
              </p>
            </li>
            <li>
              <h3>Test & Iterate</h3>
              <p>
                Conducted usability testing sessions to refine the notification
                system based on user feedback and accessibility requirements.
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
            The design process resulted in a comprehensive notification system
            that addresses the critical need for pressure relief reminders while
            prioritizing accessibility and user autonomy.
          </p>

          <div className="case-highlight-grid" aria-label="Key outcomes">
            <article className="case-highlight-card">
              <h3>Multi-modal accessibility</h3>
              <p>
                Designed notifications that can be perceived through visual,
                auditory, and haptic channels, ensuring the system works for
                users with different sensory abilities.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>User-centered timing</h3>
              <p>
                Developed customizable reminder intervals based on user
                research, allowing individuals to set schedules that fit their
                daily routines and medical needs.
              </p>
            </article>

            <article className="case-highlight-card">
              <h3>Non-intrusive design</h3>
              <p>
                Created notification patterns that effectively remind users
                without being disruptive, respecting their autonomy and daily
                activities.
              </p>
            </article>
          </div>

          <p className="epilogue-regular mt-4">
            <a
              href="https://medium.com/@rachsadeh/time-to-move-accessible-pressure-relief-notifications-for-wheelchair-users-design-of-a-user-study-e93a3aa3b46b"
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

export default TimeToMoveCaseStudy;
