// src/app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const Home: React.FC = () => {
  const [headerHeight, setheaderHeight] = useState<number | undefined>(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");

      setheaderHeight(header?.offsetHeight);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.addEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <RevealOnScroll>
            <h1>Cédric Lin</h1>
          </RevealOnScroll>
        </section>
        <section
          id="about"
          className="flex justify-center content-center items-center"
        >
          <RevealOnScroll>
            <h1>About section</h1>
          </RevealOnScroll>
        </section>
        <section id="experience">
          <RevealOnScroll>
            <h1>Experience section</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              saepe, magni officia impedit deleniti eos tempore repellat
              explicabo natus, dolorum atque blanditiis et minima, sapiente sit
              rem ea possimus odit?
            </p>
          </RevealOnScroll>
        </section>
        <section id="work">
          <RevealOnScroll>
            <h1>Work section</h1>
          </RevealOnScroll>
        </section>
        <section id="education">
          <RevealOnScroll>
            <h1>Education section</h1>
          </RevealOnScroll>
        </section>
        <section id="contact">
          <RevealOnScroll>
            <h1>Contact section</h1>
          </RevealOnScroll>
        </section>
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
