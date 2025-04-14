import React, { useEffect, useRef } from "react";
import Kinet from "kinet";
import "./customCursorKinet.css"; // Make sure this filename matches your actual file!

export default function CustomCursorKinet() {
  const circleRef = useRef(null);

  useEffect(() => {
    const kinet = new Kinet({
      acceleration: 0.06,
      friction: 0.2,
      names: ["x", "y"],
    });

    const circle = circleRef.current;

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
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={circleRef} className="circle" />;
}
