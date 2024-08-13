import { useEffect, useRef, useState } from "react";

interface DotProps {
  title: string;
}

export const Dots: React.FC<DotProps> = ({ title }) => {
  const [active, setActive] = useState<boolean>(false);

  const ref = useRef<HTMLTableSectionElement | null>(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
      } else {
        setActive(false);
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

  console.log(active);
  return (
    <div className={`${active ? "bg-cursor" : "bg-text"}`}>
      <a href={`#${title.toLowerCase()}`}>{title}</a>
    </div>
  );
};
