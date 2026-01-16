import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./flipCardProject.css"; // Place all the styles here

const FlipCardProject = ({
  image,
  title,
  tags,
  summary,
  buttonText,
  buttonDisabled,
  buttonLink,
}) => {
  const scrollableRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!buttonDisabled && buttonLink) {
      // Check if it's an external URL (starts with http:// or https://)
      if (buttonLink.startsWith("http://") || buttonLink.startsWith("https://")) {
        window.open(buttonLink, "_blank", "noopener,noreferrer");
      } else {
        // Internal route - use React Router navigation
        navigate(buttonLink);
      }
    }
  };

  useEffect(() => {
    const el = scrollableRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.preventDefault(); // Block page scroll
      el.scrollTop += e.deltaY; // Manually scroll the card
    };

    let startY;
    let scrollTop;

    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
      scrollTop = el.scrollTop;
    };

    const onTouchMove = (e) => {
      e.preventDefault(); // Prevent page scroll
      const dy = e.touches[0].clientY - startY;
      el.scrollTop = scrollTop - dy;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
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
