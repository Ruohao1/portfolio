// src/app/page.tsx
"use client";

import Header from "@/components/Header";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Hero } from "@/components/Sections/Hero";
import NavigationDots from "@/components/NavigationDots";
import React, { useRef } from "react";

const Home: React.FC = () => {
  const sections = [
    { id: "about" },
    { id: "work" },
    { id: "experience" },
    { id: "education" },
  ];

  const sectionRefs = useRef(
    sections.map(() => React.createRef<HTMLElement>())
  );

  return (
    <>
      <Header />
      <NavigationDots sections={sections} sectionRefs={sectionRefs} />
      <main>
        <Hero />
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            ref={sectionRefs.current[index]}
          >
            <RevealOnScroll>
              <h1 className="capitalize">{section.id} section</h1>
            </RevealOnScroll>
          </section>
        ))}
        <section className="h-96">
          <footer>
            <h1>Footer</h1>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Home;
