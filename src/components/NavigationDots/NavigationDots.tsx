import { useEffect, useRef, useState } from "react";
import "./NavigationDots.css";
import React from "react";

interface Section {
  id: string;
}

interface NavigationDotsProps {
  sections: Section[];
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ sections }) => {
  const [active, setActive] = useState<number>(0);
  const sectionRefs = useRef(
    sections.map(() => React.createRef<HTMLElement>())
  );
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref.current === entry.target
            );
            setActive(index);
          }
        });
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
  }, [sections]);

  return (
    <>
      <div className="flex items-center fixed z-10 right-0 h-screen">
        <ul>
          {sections.map((section, index) => (
            <li key={section.id}>
              <span
                className={`dot ${active === index ? "active" : ""}`}
                onClick={() =>
                  sectionRefs.current[index].current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                {section.id}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          ref={sectionRefs.current[index]}
        />
      ))}
    </>
  );
};

export default NavigationDots;
