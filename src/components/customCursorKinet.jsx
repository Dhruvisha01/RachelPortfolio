import React, { useEffect, useRef } from "react";
import Kinet from "kinet";
import "./customCursorKinet.css"; // Make sure this filename matches your actual file!

export default function CustomCursorKinet() {
  const circleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const kinet = new Kinet({
      acceleration: 0.06,
      friction: 0.2,
      names: ["x", "y"],
    });

    const circle = circleRef.current;
    const img = imgRef.current;

    const getBackgroundColor = (element) => {
      if (!element) return null;
      
      const style = window.getComputedStyle(element);
      let bgColor = style.backgroundColor;
      
      // If background is transparent, check parent
      if (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") {
        const parent = element.parentElement;
        if (parent && parent !== document.body) {
          return getBackgroundColor(parent);
        }
      }
      
      return bgColor;
    };

    const isWhiteBackground = (color) => {
      if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)") {
        return false;
      }
      
      // Parse RGB values
      const rgbMatch = color.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        const r = parseInt(rgbMatch[0]);
        const g = parseInt(rgbMatch[1]);
        const b = parseInt(rgbMatch[2]);
        // Consider it white if all RGB values are above 200
        return r > 200 && g > 200 && b > 200;
      }
      
      return false;
    };

    kinet.on("tick", (instances) => {
      if (circle) {
        circle.style.transform = `translate3d(${instances.x.current}px, ${
          instances.y.current
        }px, 0)
          rotateX(${instances.x.velocity / 2}deg)
          rotateY(${instances.y.velocity / 2}deg)`;
      }
    });

    const handleMouseMove = (event) => {
      kinet.animate("x", event.clientX);
      kinet.animate("y", event.clientY);

      // Check background color at cursor position
      if (img) {
        const element = document.elementFromPoint(event.clientX, event.clientY);
        const bgColor = getBackgroundColor(element);
        const isWhite = isWhiteBackground(bgColor);
        
        // Apply filter for higher contrast on white backgrounds
        if (isWhite) {
          img.style.filter = "invert(1) brightness(0.2)";
        } else {
          img.style.filter = "none";
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div ref={circleRef} className="circle">
      <img ref={imgRef} src="/logo_transparent.png" alt="Cursor logo" />
    </div>
  );
}
