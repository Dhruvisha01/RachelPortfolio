import React, { useState, useEffect } from "react";
import "./principlesCard.css";

const PrinciplesCard = ({ iconSet = [], title, summary }) => {
  const [iconIndex, setIconIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  // const [fade, setFade] = useState(true);

  useEffect(() => {
    // Preload all images before rendering
    const loadImages = async () => {
      const promises = iconSet.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          })
      );
      await Promise.all(promises);
      setImagesLoaded(true);
    };

    loadImages();
  }, [iconSet]);

  useEffect(() => {
    if (imagesLoaded && iconSet.length > 1) {
      const interval = setInterval(() => {
        setIconIndex((prev) => (prev + 1) % iconSet.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [imagesLoaded, iconSet]);

  if (!imagesLoaded) {
    return <div className="loading-placeholder"></div>; // Or your shimmer/loading
  }

  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
      <div className="project-card-principles">
        <div className="principleLogo image-container">
          <img
            src={iconSet[iconIndex]}
            alt={title}
            className="fade-image-stable"
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
