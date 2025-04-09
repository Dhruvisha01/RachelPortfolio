import React from 'react';
import './flipCardProject.css'; // Place all the styles here

const FlipCardProject = ({ image, title, tags, summary, buttonText,
    buttonDisabled,
    buttonLink }) => {

    const handleClick = () => {
        if (!buttonDisabled && buttonLink) {
            window.open(buttonLink, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="col-lg-4 d-flex justify-content-center">
            <div className="project-card">
                <div className="card-image-wrapper">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={image} alt={title} />
                            </div>
                            <div className="flip-card-back">
                                <p className="epilogue-regular">{summary}</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-text">
                        <p className="epilogue-semibold">{title}</p>
                        <p className="epilogue-regular">{tags}</p>
                        {buttonText && (
                            <button
                                className="project-button"
                                onClick={handleClick}
                                disabled={buttonDisabled}
                            >
                                {buttonText}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FlipCardProject;
