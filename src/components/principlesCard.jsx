import React from "react";

const PrinciplesCard = ({ image, title, summary }) => {
    return (
        <div className="col-lg-4 d-flex justify-content-center">
            <div className="project-card">
                <div className="principleLogo">
                    <img src={image} className="principleLogo" alt="" />
                </div>
                <div className="project-text">
                    <p className="epilogue-semibold">{title}</p>
                    <p className="epilogue-regular">{summary}</p>
                </div>
            </div>
        </div>
    );
}