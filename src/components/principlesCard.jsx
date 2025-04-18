import React, { useState, useEffect } from "react";
import "./principlesCard.css";

const PrinciplesCard = ({ iconSet = [], title, summary }) => {
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    if (iconSet.length > 1) {
      const interval = setInterval(() => {
        setIconIndex((prevIndex) => (prevIndex + 1) % iconSet.length);
      }, 1000); // change every second

      return () => clearInterval(interval); // cleanup
    }
  }, [iconSet]);

  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
      <div className="project-card-principles">
        <div className="principleLogo">
          <img
            key={iconSet[iconIndex]} // ensures animation is re-triggered
            src={iconSet[iconIndex] || iconSet[0]}
            alt={`${title} icon`}
            className="fade-image"
          />
        </div>
        <div className="project-text-principles">
          <p className="epilogue-semibold principleTitle">{title}</p>
          <p className="epilogue-regular principleSummary">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesCard;
