// src/app/page.tsx
"use client";

import Header from "@/components/Header";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Hero } from "@/components/Sections/Hero";
import NavigationDots from "@/components/NavigationDots";

const Home: React.FC = () => {
  const sections = [
    { id: "about" },
    { id: "work" },
    { id: "experience" },
    { id: "education" },
  ];
  return (
    <>
      <Header />
      <NavigationDots sections={sections} />
      <main>
        <Hero />
        <section
          id="about"
          className="flex flex-col justify-center content-center items-center"
        >
          <RevealOnScroll>
            <h1>About section</h1>
          </RevealOnScroll>
          <RevealOnScroll className="delay-75">
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
