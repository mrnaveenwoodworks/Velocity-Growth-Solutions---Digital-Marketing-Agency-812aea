import { useEffect, useState, useCallback } from "react";

// Scroll direction detection
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);

  const toggleScrollDirection = useCallback(() => {
    const scrollY = window.pageYOffset;
    if (scrollY > prevOffset) {
      setScrollDirection("down");
    } else if (scrollY < prevOffset) {
      setScrollDirection("up");
    }
    setPrevOffset(scrollY);
  }, [prevOffset]);

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollDirection);
    return () => {
      window.removeEventListener("scroll", toggleScrollDirection);
    };
  }, [toggleScrollDirection]);

  return scrollDirection;
};

// Intersection Observer hook for scroll animations
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, options);

      observer.observe(ref);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return [setRef, isVisible];
};

// Scroll progress calculation
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.pageYOffset;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return progress;
};

// Parallax scroll effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setOffset(scrolled * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offset;
};

// Smooth scroll to element
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Reveal on scroll animation classes
export const revealAnimationClasses = {
  hidden: "opacity-0 translate-y-10",
  visible: "opacity-100 translate-y-0",
  transition: "transition-all duration-1000 ease-out"
};

// Stagger children animation
export const useStaggerAnimation = (totalItems, staggerDelay = 100) => {
  return Array.from({ length: totalItems }, (_, i) => ({
    transition: {
      delay: i * staggerDelay
    }
  }));
};

// Mouse parallax effect for hero sections
export const useMouseParallax = (sensitivity = 0.1) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth - e.pageX * sensitivity) / 100;
      const y = (window.innerHeight - e.pageY * sensitivity) / 100;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [sensitivity]);

  return position;
};

// Scroll-triggered counter animation
export const useCounterAnimation = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useCallback(node => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }
  }, [isVisible]);

  useEffect(() => {
    let frameId;
    let startTime;

    if (isVisible) {
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime - delay) / duration, 1);

        if (progress > 0) {
          setCount(Math.floor(end * progress));
        }

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(frameId);
  }, [end, duration, delay, isVisible]);

  return [counterRef, count];
};

// Text scramble animation effect
export const useTextScramble = (text, duration = 2000) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#";

  useEffect(() => {
    let frameId;
    const startTime = Date.now();
    
    const update = () => {
      const now = Date.now();
      const progress = (now - startTime) / duration;
      
      if (progress < 1) {
        let scrambledText = "";
        for (let i = 0; i < text.length; i++) {
          const charProgress = (progress * text.length - i) * 2;
          if (charProgress < 0) {
            scrambledText += chars[Math.floor(Math.random() * chars.length)];
          } else if (charProgress >= 1) {
            scrambledText += text[i];
          } else {
            scrambledText += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        setDisplayText(scrambledText);
        frameId = requestAnimationFrame(update);
      } else {
        setDisplayText(text);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [text, duration]);

  return displayText;
};

// Scroll-triggered CSS class toggler
export const useScrollToggle = (threshold = 100) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isActive;
};

// Floating animation utility
export const floatingAnimation = {
  keyframes: `
    @keyframes floating {
      0% { transform: translate(0, 0px); }
      50% { transform: translate(0, 15px); }
      100% { transform: translate(0, 0px); }
    }
  `,
  className: "animate-floating",
  style: {
    animation: "floating 3s ease-in-out infinite"
  }
};

// Export utility object for common animation configurations
export const animations = {
  fadeIn: {
    initial: "opacity-0",
    animate: "opacity-100",
    transition: "transition-opacity duration-500 ease-in"
  },
  slideUp: {
    initial: "opacity-0 translate-y-10",
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-500 ease-out"
  },
  slideDown: {
    initial: "opacity-0 -translate-y-10",
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-500 ease-out"
  },
  slideLeft: {
    initial: "opacity-0 translate-x-10",
    animate: "opacity-100 translate-x-0",
    transition: "transition-all duration-500 ease-out"
  },
  slideRight: {
    initial: "opacity-0 -translate-x-10",
    animate: "opacity-100 translate-x-0",
    transition: "transition-all duration-500 ease-out"
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
    transition: "transition-all duration-500 ease-out"
  },
  rotate: {
    initial: "opacity-0 rotate-180",
    animate: "opacity-100 rotate-0",
    transition: "transition-all duration-500 ease-out"
  }
};