import React from "react";
import "./principlesCard.css";

const PrinciplesCard = ({ image, title, summary }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
      <div className="project-card-principles">
        <div className="principleLogo">
          <img src={image} alt="" />
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
