import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

// Global state to track if any animation is currently running
const animationQueue: Array<() => void> = [];
let isAnimating = false;

const startNextAnimation = () => {
  if (animationQueue.length > 0 && !isAnimating) {
    isAnimating = true;
    const nextAnimation = animationQueue.shift();
    if (nextAnimation) nextAnimation();
  }
};

interface TypewriterProps {
  children: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  cursorChar?: string;
  cursorClassName?: string;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  children,
  className = '',
  speed = 40,
  delay = 0,
  cursor = false,
  cursorChar = '|',
  cursorClassName = '',
  onComplete,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isQueued, setIsQueued] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  const finalTextColorClass = isDark ? 'text-neutral-50' : 'text-neutral-800';

  // Start animation function
  const startAnimation = () => {
    const text = children;
    let currentIndex = 0;
    let frameId: number | null = null;

    let lastTimestamp = 0;
    const getRandomDelay = () => Math.random() * (speed * 0.3) + speed * 0.85;
    let nextCharDelay = getRandomDelay();

    const typeNextChar = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (elapsed >= nextCharDelay) {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
          lastTimestamp = timestamp;
          nextCharDelay = getRandomDelay();
        } else {
          // Animation complete
          setHasAnimated(true);
          if (onComplete) onComplete();
          
          // Signal that the global animation state is now free
          isAnimating = false;
          
          // Start the next queued animation if any
          startNextAnimation();
          return;
        }
      }

      // Only request next frame if not complete
      if (currentIndex < text.length) {
        frameId = requestAnimationFrame(typeNextChar);
      } else {
        setHasAnimated(true);
        if (onComplete) onComplete();
        isAnimating = false;
        startNextAnimation();
      }
    };
    
    // Add initial delay
    setTimeout(() => {
      frameId = requestAnimationFrame(typeNextChar);
    }, delay);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      // Ensure we clean up global state if component unmounts during animation
      if (!hasAnimated) {
        isAnimating = false;
        startNextAnimation();
      }
    };
  };

  // Queue this animation if it becomes visible
  useEffect(() => {
    if (isVisible && !hasAnimated && !isQueued) {
      setIsQueued(true);
      
      const animationFn = () => {
        const cleanup = startAnimation();
        return () => {
          cleanup();
        };
      };
      
      animationQueue.push(animationFn);
      
      // If nothing is currently animating, start this one
      if (!isAnimating) {
        startNextAnimation();
      }
    }
  }, [isVisible, hasAnimated, isQueued]);

  // Intersection Observer setup with lower threshold
  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1 
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]);

  // Determine styles based on animation state
  const textStyles = !hasAnimated
    ? {
      backgroundImage: isDark
        ? 'linear-gradient(90deg, #404040, #f5f5f5, #404040)'
        : 'linear-gradient(90deg, #d4d4d4, #262626, #d4d4d4)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite linear',
    }
    : undefined;

  const textClasses = `whitespace-pre-wrap break-words ${!hasAnimated ? 'bg-clip-text text-transparent' : finalTextColorClass}`;

  return (
    <div
      ref={elementRef}
      className={`${className} relative inline-flex overflow-hidden align-bottom`}
    >
      <div
        className={textClasses}
        style={textStyles}
        aria-live="polite"
        aria-label={hasAnimated ? children : "Loading text"}
      >
        {displayedText || (hasAnimated && children === '') ? displayedText : '\u00A0'}
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>

      {!hasAnimated && cursor && (
        <motion.span
          className={`${cursorClassName} inline-block ${finalTextColorClass}`}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          aria-hidden="true"
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  );
};