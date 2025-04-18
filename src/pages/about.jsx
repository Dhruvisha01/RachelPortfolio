// import React from "react";
// import "./about.css";
// import Header from "../components/Header";

// function About() {
//   return (
//     <>
//       <Header />
//       <div className="about-page">
//         <div className="container py-5">
//           <div className="row align-items-start">
//             <div className="col-md-4 mb-4">
//               <img
//                 src="/Rachel.jpg"
//                 alt="Rachel Sadeh"
//                 className="img-fluid rounded"
//               />
//             </div>
//             <div className="col-md-8">
//               <h1 className="mb-4">My Story</h1>

//               <p>
//                 Hi, I’m Rachel Sadeh, a User Experience and Product Designer
//                 based in Pittsburgh, Pennsylvania. My passion lies in creating
//                 accessible, user-centered designs that make technology more
//                 inclusive for everyone. Growing up in the “Steel City” has
//                 shaped my appreciation for both its cultural history and
//                 innovative future, fueling my commitment to design solutions
//                 that break down barriers.
//               </p>
//               <p>
//                 I hold a Master’s in Human-Computer Interaction from Carnegie
//                 Mellon University and a B.S. in Psychology from the University
//                 of Pittsburgh, where I also picked up a second major in Digital
//                 Narrative and Interactive Design (Online Media track) with a
//                 certificate in Children's Literature and Studies. This diverse
//                 educational background gives me a unique perspective on how to
//                 design for a wide range of users.
//               </p>
//               <p>
//                 I now apply this knowledge as a freelance digital designer and
//                 consultant, specializing in accessible designs across various
//                 platforms and working closely with crossfunctional teams.
//                 Interested in working together? Visit my connect page to get in
//                 touch!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;

import React from "react";
import "./about.css";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="container py-5">
          {/* Heading should be here */}
          <div className="about-title">
            <h1 className="text-center text-white mb-5">My Story</h1>
          </div>

          <div className="row align-items-start">
            <div className="col-md-4 mb-4">
              <img
                src="/Rachel.jpg"
                alt="Rachel Sadeh"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <p>
                Hi, I’m Rachel Sadeh, a User Experience and Product Designer
                based in Pittsburgh, Pennsylvania. My passion lies in creating
                accessible, user-centered designs that make technology more
                inclusive for everyone. Growing up in the “Steel City” has
                shaped my appreciation for both its cultural history and
                innovative future, fueling my commitment to design solutions
                that break down barriers.
              </p>
              <p>
                I hold a Master’s in Human-Computer Interaction from Carnegie
                Mellon University and a B.S. in Psychology from the University
                of Pittsburgh, where I also picked up a second major in Digital
                Narrative and Interactive Design (Online Media track) with a
                certificate in Children's Literature and Studies. This diverse
                educational background gives me a unique perspective on how to
                design for a wide range of users.
              </p>
              <p>
                I now apply this knowledge as a freelance digital designer and
                consultant, specializing in accessible designs across various
                platforms and working closely with crossfunctional teams.
                Interested in working together? Visit my connect page to get in
                touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
