import React from "react";
import './home.css';

import Header from '../components/Header';
import FlipCardProject from "../components/FlipCardProject";


function Home() {
    return (
        <div className="home">
            <Header />
            <div className="introduction container">
                <div className="row">
                    <div className="col-lg-6 text mt-4 mt-lg-0 px-4 px-lg-0 text-center text-lg-start">
                        <h4 className="epilogue-semibold">Human First Approach | Innovative Thinking</h4>
                        <h1 className="epilogue-semibold">Experience Designer & Researcher</h1>
                        <p className="epilogue-regular">Looking to collaborate and exchange some innovative ideas?</p>
                        <button className="epilogue-semibold btn btn-light connectButton">Connect With Me!</button>
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
                                title="Healing at Home: Enhancing Post-operative Care for Skin Cancer Patients"
                                tags="UI/UX"
                                summary="A mobile UI for skin cancer patients to monitor healing post-surgery using AI photo analysis."
                                buttonText="View Case Study"
                                buttonDisabled={false}
                                buttonLink="https://example.com/case-study"
                            />
                            <FlipCardProject
                                image="./p2.svg"
                                title="BikeLinkPro, Designing the Future of E-Bikes"
                                tags="UI, Research"
                                summary="An e-bike dashboard UI designed through user research and usability testing."
                                buttonText="View Case Study"
                                buttonDisabled={false}
                                buttonLink="https://example.com/case-study"
                            />
                            <FlipCardProject
                                image="./p2.svg"
                                title="BikeLinkPro, Designing the Future of E-Bikes"
                                tags="UI, Research"
                                summary="An e-bike dashboard UI designed through user research and usability testing."
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
                                image="./p1.svg"
                                title="Healing at Home: Enhancing Post-operative Care for Skin Cancer Patients"
                                tags="UI/UX"
                                summary="A mobile UI for skin cancer patients to monitor healing post-surgery using AI photo analysis."
                                buttonText="View Case Study"
                                buttonDisabled={false}
                                buttonLink="https://example.com/case-study"
                            />
                            <FlipCardProject
                                image="./p2.svg"
                                title="BikeLinkPro, Designing the Future of E-Bikes"
                                tags="UI, Research"
                                summary="An e-bike dashboard UI designed through user research and usability testing."
                                buttonText="View Case Study"
                                buttonDisabled={false}
                                buttonLink="https://example.com/case-study"
                            />
                            <FlipCardProject
                                image="./p2.svg"
                                title="BikeLinkPro, Designing the Future of E-Bikes"
                                tags="UI, Research"
                                summary="An e-bike dashboard UI designed through user research and usability testing."
                                buttonText="View Case Study"
                                buttonDisabled={false}
                                buttonLink="https://example.com/case-study"
                            />

                        </div>
                    </div>
                </div>
            </div>

            <div className="principles">
                <h2 className="epilogue-semibold">Design Principles</h2>
                <div className="principles-wrapper px-3 px-md-5">
                    <div className="projects-wrapper">
                        <div className="row gx-4 gy-4 gx-lg-4">
                            
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Home;