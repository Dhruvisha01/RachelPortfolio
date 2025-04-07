import React from "react";
import './home.css';

import Header from '../components/Header';


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
                    <div className="row gx-2 gx-lg-4">
                        <div className="col-lg-6 left">
                            <img src="./p1.svg" alt="" />
                            <p className="epilogue-semibold">Healing at Home: Enhancing Post-operative Care for Skin Cancer Patients</p>
                            <p className="epilogue-regular">UI/UX</p>
                        </div>
                        <div className="col-lg-6 right">
                            <img src="./p2.svg" alt="" />
                            <p className="epilogue-semibold">BikeLinkPro, Designing the Future of E-Bikes</p>
                            <p className="epilogue-regular">UI, Research</p>
                        </div>

                    </div>
                </div>
                <div className="project-section px-3 px-md-5">
                    <div className="row gx-2 gx-lg-4">
                        <div className="col-lg-6 left">
                            <img src="./p3.svg" alt="" />
                            <p className="epilogue-semibold">"Time to Move!": Accessible Pressure Relief Reminders for Wheelchair Users</p>
                            <p className="epilogue-regular">UI, Research</p>
                        </div>
                        <div className="col-lg-6 right">
                            <img src="./p2.svg" alt="" />
                            <p className="epilogue-semibold">BikeLinkPro, Designing the Future of E-Bikes</p>
                            <p className="epilogue-regular">UI Art Direction</p>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    );
}

export default Home;