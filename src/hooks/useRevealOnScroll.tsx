import { useEffect, useRef, useState } from "react";

function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    if (ref.current) {
      scrollObserver.observe(ref.current);
    }

    return () => {
      const currentRef = ref.current;
      if (currentRef) {
        scrollObserver.unobserve(currentRef);
      }
    };
  }, []);

  const classes = `transition-opacity duration-2000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}

export default RevealOnScroll;
