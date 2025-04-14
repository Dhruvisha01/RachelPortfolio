import React from "react";
import "./about.css";
import Header from "../components/Header";
/*const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
*/
function About() {
  return (
    <div className="about-page">
      <Header />
      <h1>My Story</h1>
      <img src="/Rachel.jpg" alt="Rachel Sadeh" className="sticky" />
      <p>
        Hi, I’m Rachel Sadeh, a User Experience and Product Designer based in
        Pittsburgh, Pennsylvania. My passion lies in creating accessible,
        user-centered designs that make technology more inclusive for everyone.
        Growing up in the “Steel City” has shaped my appreciation for both its
        cultural history and innovative future, fueling my commitment to design
        solutions that break down barriers.
      </p>
      <p>
        I hold a Master’s in Human-Computer Interaction from Carnegie Mellon
        University and a B.S. in Psychology from the University of Pittsburgh,
        where I also picked up a second major in Digital Narrative and
        Interactive Design (Online Media track) with a certificate in Children's
        Literature and Studies. This diverse educational background gives me a
        unique perspective on how to design for a wide range of users.
      </p>
      <p>
        This education allowed me to hone my skills in empathizing with
        audiences and users, combining my writing and design abilities to create
        user-centered designs with a focus on accessibility. I now apply this
        knowledge as a freelance digital designer and consultant, specializing
        in accessible designs across various platforms and working closely with
        crossfunctional teams. Interested in working together? Visit my connect
        page to get in touch!
      </p>
    </div>
  );
}

export default About;
