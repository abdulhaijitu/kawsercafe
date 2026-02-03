import { ReactNode, useEffect, useRef, useState, memo } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = memo(({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animation timing
          const timeoutId = setTimeout(() => {
            requestAnimationFrame(() => setIsVisible(true));
          }, delay);
          observer.unobserve(entry.target);
          return () => clearTimeout(timeoutId);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-300 ease-out will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
