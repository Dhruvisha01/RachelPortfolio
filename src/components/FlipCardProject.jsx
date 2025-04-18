import React, { useEffect, useRef } from 'react';
import './flipCardProject.css'; // Place all the styles here

const FlipCardProject = ({ image, title, tags, summary, buttonText,
    buttonDisabled,
    buttonLink }) => {

    const scrollableRef = useRef(null);

    const handleClick = () => {
        if (!buttonDisabled && buttonLink) {
            window.open(buttonLink, '_blank', 'noopener,noreferrer');
        }
    };

    useEffect(() => {
        const el = scrollableRef.current;
        if (!el) return;

        const onWheel = (e) => {
            e.preventDefault(); // Block page scroll
            el.scrollTop += e.deltaY; // Manually scroll the card
        };

        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, []);
    return (
        <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div className="project-card">
                <div className="card-image-wrapper">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={image} alt={title} />
                            </div>
                            <div className="flip-card-back">
                                <div className="scrollable-content" ref={scrollableRef}>
                                    <p className="epilogue-regular">{summary}</p>
                                </div>
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
