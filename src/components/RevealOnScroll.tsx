import { useEffect, useRef, useState } from "react";

import React from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealOnScroll({
  children,
  className = "",
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    const currentRef = ref.current;
    if (currentRef) {
      scrollObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        scrollObserver.unobserve(currentRef);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  } ${className}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
