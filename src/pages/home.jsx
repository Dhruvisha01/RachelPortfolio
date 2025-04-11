import React from "react";
import "./home.css";

import Header from "../components/Header";
import FlipCardProject from "../components/FlipCardProject";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="introduction container">
        <div className="row">
          <div className="col-lg-6 text mt-4 mt-lg-0 px-4 px-lg-0 text-center text-lg-start">
            <h4 className="epilogue-semibold">
              Human First Approach | Innovative Thinking
            </h4>
            <h1 className="epilogue-semibold">
              Experience Designer & Researcher
            </h1>
            <p className="epilogue-regular">
              Looking to collaborate and exchange some innovative ideas?
            </p>
            <button className="epilogue-semibold btn btn-light connectButton">
              Connect With Me!
            </button>
          </div>
          <div className="col-lg-6 image mt-4 mt-lg-0 px-4 px-lg-0">
            <img src="./hero.svg" alt="hero-img" />
          </div>
        </div>
      </div>

      <div className="work">
        <h2 className="epilogue-semibold">Latest Work</h2>
        <div className="project-section px-3 px-md-5">
          <div className="projects-wrapper">
            <div className="row gx-4 gy-4 gx-lg-4">
              <FlipCardProject
                image="./p1.svg"
                title="VeyTel"
                tags="UI/UX"
                summary="Skin cancer is one of the most prevalent cancers globally. Early detection can significantly improve patient outcomes. As a UX/UI Design Consultant at VeyTel, I have been tasked with creating AI-powered interfaces for dermatologists to enhance their diagnostic processes, focusing in particular on tracking and analyzing skin lesions over time. Our goal is to leverage AI insights while ensuring that the final decisions remain with the healthcare providers."
                buttonText="Coming Soon!"
                buttonDisabled={true}
                buttonLink="https://example.com/case-study"
              />
              <FlipCardProject
                image="./p2.svg"
                title="Healing at Home: Enhancing Post-operative Care for Skin Cancer Patients"
                tags="UI, Research"
                summary="Working alongside University Hospitals of Cleveland, we are tackling the challenge of improving at-home patient-administered wound care, utilizing empathetic research, innovative ideation, while collaborating with healthcare professionals to develop tailored solutions aimed at enhancing patient outcomes and experiences in post-surgical wound care management."
                buttonText="View Case Study"
                buttonDisabled={false}
                buttonLink="https://example.com/case-study"
              />
              <FlipCardProject
                image="./p3.svg"
                title='"Time to Move!": Accessible Pressure Relief Reminders for Wheelchair Users'
                tags="UI, Research"
                summary="I designed and prototyped a multi-modal notification system to remind wheelchair-bound users to perform pressure relief maneuvers. These maneuvers can help significantly reduce the chance of developing potentially life-threatening ulcers."
                buttonText="View Case Study"
                buttonDisabled={false}
                buttonLink="https://example.com/case-study"
              />
            </div>
          </div>
        </div>
        <div className="project-section px-3 px-md-5">
          <div className="projects-wrapper">
            <div className="row gx-4 gy-4 gx-lg-4">
              <FlipCardProject
                image="./p4.svg"
                title="Proofpoint"
                tags="Wireframing, UX Research"
                summary="In a world where digital threats are increasingly diverse and sophisticated, a very large percentage of cybersecurity incidents can be traced to human error. As a UX/UI designer at Proofpoint, I was assigned to the cybersecurity awareness team. Proofpoint’s flagship cybersecurity awareness product involves sending mock phishing emails to employees. When an employee falls for the mock attack, they are redirected to a “landing page”."
                buttonText="View Case Study"
                buttonDisabled={false}
                buttonLink="https://example.com/case-study"
              />
              <FlipCardProject
                image="./p5.svg"
                title="BikeLinkPro, Designing the Future of E-Bikes"
                tags="UI, Research"
                summary="Imagine a world where your daily commute is effortless, eco-friendly, and intelligent. Welcome to BikeLinkPro, the e-bike of the future. Through a rigorous process of user feedback and rapid prototyping, we designed both physical and digital interfaces for semi-autonomous e-bikes, refining usability, safety, and functionality to redefine urban mobility."
                buttonText="View Case Study"
                buttonDisabled={false}
                buttonLink="https://example.com/case-study"
              />
              <FlipCardProject
                image="./p6.svg"
                title="Redesigning ClientView, Allegheny County"
                tags="UI, Research"
                summary="An e-bike dashboard UI designed through user research and usability testing."
                buttonText="Coming Soon!"
                buttonDisabled={true}
                buttonLink="https://example.com/case-study"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
