import React, { useEffect, useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInComponentProps {
  children: ReactNode;
}

const FadeInLeft = ({ children }: FadeInComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.2) {
            setIsVisible(true);
          } else {
            // setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -70 }}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
