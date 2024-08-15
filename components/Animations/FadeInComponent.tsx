import React, { useEffect, useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInComponentProps {
  children: ReactNode;
}

const FadeInComponent = ({ children }: FadeInComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.1) {
            setIsVisible(true);
          } else {
            // setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.75 }}>
      {children}
    </motion.div>
  );
};

export default FadeInComponent;
