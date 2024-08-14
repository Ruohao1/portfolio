import { useEffect, useRef, useState } from "react";
import "./NavigationDots.css";
import React from "react";

interface Section {
  id: string;
}

interface NavigationDotsProps {
  sections: Section[];
  sectionRefs: React.MutableRefObject<React.RefObject<HTMLElement | null>[]>;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({
  sections,
  sectionRefs,
}) => {
  const [active, setActive] = useState<number>(NaN);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.filter((entry) => entry.isIntersecting).length === 0) {
          setActive(NaN);
        } else {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = sectionRefs.current.findIndex(
                (ref) => ref.current === entry.target
              );
              setActive(index);
            }
          });
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRefs = sectionRefs.current; // Create a variable to hold the value of sectionRefs.current

    currentRefs.forEach((ref) => {
      // Use the variable in the forEach loop
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        // Use the variable in the forEach loop
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sections, sectionRefs]);

  return (
    <>
      <div className="flex items-center fixed z-10 right-2 h-screen">
        <nav>
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`dot ${active === index ? "active" : ""}`}
              onClick={() =>
                sectionRefs.current[index].current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <span className="dot-label">{section.id}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavigationDots;
