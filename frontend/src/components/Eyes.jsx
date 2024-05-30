import { useEffect, useRef } from "react";

function Eyes() {
  const eyeRef = useRef([]);
  const pupilRef = useRef([]);

  useEffect(() => {
    const movePupil = (index, event) => {
      const eye = eyeRef.current[index];
      const pupil = pupilRef.current[index];

      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;
      const angle = Math.atan2(
        event.clientY - eyeCenterY,
        event.clientX - eyeCenterX
      );
      const eyeRadius = rect.width / 2;
      const pupilRadius = pupil.offsetWidth / 2;
      const maxDistance = eyeRadius - pupilRadius;

      const x = Math.cos(angle) * maxDistance;
      const y = Math.sin(angle) * maxDistance;
      pupil.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseMove = (event) => {
      movePupil(0, event);
      movePupil(1, event);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <button className="border-2 border-black flex flex-row items-center justify-center gap-20 h-20 w-52">
      {[0, 1].map((index) => (
        <div
          key={index}
          className="border-2 border-black w-12 h-12 rounded-full bg-white relative flex justify-center items-center overflow-hidden"
          ref={(el) => (eyeRef.current[index] = el)}
        >
          <div
            className="w-5 h-5 rounded-full bg-black absolute transition-transform duration-100 ease-linear"
            ref={(el) => (pupilRef.current[index] = el)}
          ></div>
        </div>
      ))}
      <div className="absolute mt-4 w-16 h-16 flex flex-col items-center justify-center">
        <div className="border-2 border-black w-12"></div>
        <div className="w-12 h-5 flex flex-row justify-center ml-4"></div>
      </div>
    </button>
  );
}

export default Eyes;
