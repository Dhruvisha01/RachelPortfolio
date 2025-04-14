import React, { useState, useRef } from "react";
import "./home.css";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


import Header from "../components/Header";
import FlipCardProject from "../components/FlipCardProject";
import PrinciplesCard from "../components/principlesCard";
import ReviewCard from "../components/ReviewCard";

function Home() {
    const [showBanner, setShowBanner] = useState(false);
    const formRef = useRef(null);
    const topRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        try {
            const res = await fetch('http://localhost:5001/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                formRef.current.reset();                // clear the form
                setShowBanner(true);                    // show banner
                topRef.current?.scrollIntoView({ behavior: 'smooth' });

                setTimeout(() => {
                    setShowBanner(false);                 // auto-hide banner
                }, 5000);
            } else {
                alert('Something went wrong!');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to send message');
        }
    };

    return (
        <div className="home">
            <div ref={topRef}></div>
            <Header />
            {showBanner && (
                <div className="thank-you-banner">
                    Thanks for reaching out! I will get back to you shortly.
                </div>
            )}
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

            <div className="work" id="work">
                <h2 className="epilogue-semibold">Latest Work</h2>
                <div className="project-section px-3 px-md-5">
                    <div className="projects-wrapper">
                        <div className="row gx-4 gy-4 gx-lg-4">
                            <FlipCardProject
                                image="./p1.svg"
                                title="VeyTel"
                                tags="UI/UX"
                                summary="Skin cancer is one of the most prevalent cancers globally. Early detection can significantly improve patient outcomes. I have been tasked with creating AI-powered interfaces for dermatologists to enhance their diagnostic processes, focusing in particular on tracking and analyzing skin lesions over time. Our goal is to leverage AI insights while ensuring that the final decisions remain with the healthcare providers."
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
                                buttonLink="https://medium.com/@rachsadeh/creating-better-at-home-wound-care-experiences-for-surgical-wounds-d65e7af03f7b"
                            />
                            <FlipCardProject
                                image="./p3.svg"
                                title='"Time to Move!": Accessible Pressure Relief Reminders for Wheelchair Users'
                                tags="UI, Research"
                                summary="I designed and prototyped a multi-modal notification system to remind wheelchair-bound users to perform pressure relief maneuvers. These maneuvers can help significantly reduce the chance of developing potentially life-threatening ulcers."
                                buttonText="View Case Study"
                                buttonDisabled={false}
                                buttonLink="https://medium.com/@rachsadeh/time-to-move-accessible-pressure-relief-notifications-for-wheelchair-users-design-of-a-user-study-e93a3aa3b46b"
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
                                summary="In a world where digital threats are increasingly diverse and sophisticated, a very large percentage of cybersecurity incidents can be traced to human error. I was assigned to the cybersecurity awareness team. Proofpoint’s flagship cybersecurity awareness product involves sending mock phishing emails to employees. When an employee falls for the mock attack, they are redirected to a “landing page”."
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
                                buttonLink="https://medium.com/@rachsadeh/bikelinkpro-designing-the-future-of-e-bikes-454878311582"
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

            <div className="principles">
                <h2 className="epilogue-semibold">Design Principles</h2>
                <div className="project-section px-3 px-md-5">
                    <div className="projects-wrapper">
                        <div className="row gx-4 gy-4 gx-lg-4">
                            <PrinciplesCard
                                image="./skills.svg"
                                title="Prioritizing the User"
                                summary="I foster a human-centric mindset, ensuring the team understands and prioritizes real people’s needs in design."
                            />
                            <PrinciplesCard
                                image="./accessibility.svg"
                                title="Accessibility"
                                summary="I advocate for inclusive standards and patterns, ensuring usability, comprehension, and empowerment through education."
                            />
                            <PrinciplesCard
                                image="./emplathy.svg"
                                title="Empathy"
                                summary="I engage with teams, stakeholders, and clients to understand their unique, diverse perspectives and integrate them into my designs."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviews">
                <h2 className="epilogue-semibold">What people are saying</h2>
                <div className="project-section px-3 px-md-5">
                    <div className="projects-wrapper">
                        <div className="row gx-4 gy-4 gx-lg-4">
                            <ReviewCard
                                image="./raelin.svg"
                                name="Raelin Sawka Musuraca"
                                title="Director, MHCI Program"
                                review='"As a former hiring manager, one of the most important skills for early career professionals is to proactively seek feedback and take immediate practical steps towards improvement. I witnessed Rachel embody this behavior over and over again during, and after, her completion of the MHCI program. Through course projects, internships, and contract work, Rachel continues to seek the experience needed to be successful as a researcher and designer."'
                            />
                            <ReviewCard
                                image="./lynn.svg"
                                name="Lynn Priestly"
                                title="Digital Designer & Accessible Design Educator"
                                review='"Rachel and I first met as peers in Pitt’s Digital Narrative and Interactive Design major. Collaborating with her in and out of the classroom has always been a pleasure. She’s intelligent, detail oriented, and delivers quality work. Her natural curiosity and thoughtful insights about user experience make her a phenomenal addition to any design team."'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="awards">
                <h2 className="epilogue-semibold">Awards and Press</h2>
                <div className="project-section px-3 px-md-5">
                    <div className="projects-wrapper">
                        <div className="row gx-4 gy-4 gx-lg-4">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="award-card">
                                    <img src="./a1.svg" alt="Awards" />
                                    <h3 className="epilogue-semibold">SHE Innovates Hackathon</h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="award-card">
                                    <img src="./a2.svg" alt="Awards" />
                                    <h3 className="epilogue-semibold">
                                        Phi Eta Sigma Honors Society
                                    </h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="award-card">
                                    <img src="./a3.svg" alt="Awards" />
                                    <h3 className="epilogue-semibold">Pittsburgh Today Live</h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="award-card">
                                    <img src="./a4.svg" alt="Awards" />
                                    <h3 className="epilogue-semibold">Girls of Steel Awards</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="companies">
                <h2 className="epilogue-semibold">Where I've worked</h2>
                <div className="project-section px-3 px-md-5">
                    <div className="projects-wrapper">
                        <div className="row gx-4 gy-4 gx-lg-4">
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="award-card">
                                    <img src="./c1.svg" alt="Awards" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="award-card">
                                    <img src="./c2.svg" alt="Awards" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="award-card">
                                    <img src="./c3.svg" alt="Awards" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="award-card">
                                    <img src="./c4.svg" alt="Awards" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="award-card">
                                    <img src="./c5.svg" alt="Awards" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="award-card">
                                    <img src="./c6.svg" alt="Awards" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="connect">
                <h2>Connect with me</h2>
                <div className="project-section px-3 px-md-5">
                    <div className="projects-wrapper">
                        <div className="row gx-4 gy-4 gx-lg-4">
                            <div className="col-12 col-sm-12 col-lg-6 connect-text ">
                                <h3 className="epilogue-semibold">Let's work together!</h3>
                                <p className="epilogue-regular">
                                    I am currently based in Pittsburgh, PA and I am currently in
                                    search for a full-time position{" "}
                                </p>
                                <div className="socials">
                                    <a
                                        href="https://www.linkedin.com/in/rachel-sadeh/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin size={28} />
                                    </a>
                                    <a
                                        href="mailto:rachsadeh@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Email"
                                    >
                                        <FaEnvelope size={28} />
                                    </a>
                                </div>

                            </div>
                            <div className="col-12 col-sm-12 col-lg-6">
                                <div className="connect-card">
                                    <form onSubmit={handleSubmit} ref={formRef}>
                                        <h3 className="epilogue-light">Your Name</h3>
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="First Name" name="firstName" id="firstName" />
                                            <input type="text" placeholder="Last Name" name="lastName" id="lastName" />
                                        </div>
                                        <h3 className="epilogue-light">Your Name</h3>
                                        <div className="input-wrapper">
                                            <input type="email" placeholder="Your Email" name="email" id="email" />
                                        </div>
                                        <h3 className="epilogue-light">Message</h3>
                                        <div className="input-wrapper">
                                            <textarea name="message" id="message"></textarea>
                                        </div>
                                        <div className="buttonContainer">
                                            <button type="submit" className="submit-button">Submit</button>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p className="epilogue-regular">
                    © 2024 Rachel Sadeh. All rights reserved
                </p>
            </div>
        </div>
    );
}

export default Home;
