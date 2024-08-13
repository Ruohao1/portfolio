import { RevealOnScroll } from "../RevealOnScroll";

export const Hero: React.FC = () => {
  return (
    <section className="justify-left">
      <RevealOnScroll>
        <p>Hi, my name is</p>
        <RevealOnScroll className="delay-100">
          <h1 className="py-4">Cédric Lin</h1>
        </RevealOnScroll>
        <RevealOnScroll className="delay-150">
          <h2 className="text-2xl font-bold mb-10">
            Student in computer science
          </h2>
        </RevealOnScroll>
        <RevealOnScroll className="delay-200">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>I'm a student in CS at Telecom Nancy, here's my portfolio</p>
        </RevealOnScroll>
      </RevealOnScroll>
    </section>
  );
};
