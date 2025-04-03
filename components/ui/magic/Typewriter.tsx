import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

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
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const finalTextColorClass = isDark ? 'text-neutral-50' : 'text-neutral-800';

  // Intersection Observer setup
  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          console.log("Typewriter: Element intersecting, setting isVisible=true");
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]); // Re-run observer setup if hasAnimated changes (though shouldn't matter much)

  // Typing animation effect
  useEffect(() => {
    const text = children;
    let currentIndex = 0;
    let frameId: number | null = null; // Keep track of frame ID

    const startTypingTimeout = setTimeout(() => {
      let lastTimestamp = 0;
      const getRandomDelay = () => Math.random() * (speed * 0.3) + speed * 0.85;
      let nextCharDelay = getRandomDelay();

      const typeNextChar = (timestamp: number) => {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const elapsed = timestamp - lastTimestamp;

        if (elapsed >= nextCharDelay) {
          if (currentIndex < text.length) {
            setDisplayedText(prev => text.substring(0, prev.length + 1)); // Use functional update for safety
            currentIndex++;
            lastTimestamp = timestamp;
            nextCharDelay = getRandomDelay();
          } else {
            // Animation complete
            setHasAnimated(true); // <<<< STATE CHANGE HERE
            if (onComplete) onComplete();
            // No need to cancel frameId here, the loop condition prevents further calls
            return; // Stop the loop
          }
        }

        // Only request next frame if not complete
        if (currentIndex < text.length) {
          frameId = requestAnimationFrame(typeNextChar);
        } else {
          // Should have been caught above, but ensures no infinite loop if logic changes
          setHasAnimated(true);
          if (onComplete) onComplete();
        }
      };
      frameId = requestAnimationFrame(typeNextChar);
    }, delay);

    // Cleanup function
    return () => {
      clearTimeout(startTypingTimeout);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
    // Ensure all dependencies are listed, especially state setters if used directly
  }, [isVisible, hasAnimated, children, speed, delay, onComplete]);


  // Determine styles based on animation state
  const textStyles = !hasAnimated
    ? { // Styles during animation (shimmer)
      backgroundImage: isDark
        ? 'linear-gradient(90deg, #404040, #f5f5f5, #404040)'
        : 'linear-gradient(90deg, #d4d4d4, #262626, #d4d4d4)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite linear',
    }
    : undefined; // Explicitly use undefined to clear inline styles

  const textClasses = `whitespace-pre-wrap break-words ${!hasAnimated ? 'bg-clip-text text-transparent' : finalTextColorClass}`;

  return (
    <div
      ref={elementRef}
      className={`${className} relative inline-flex overflow-hidden align-bottom`}
    >
      <div
        className={textClasses}
        style={textStyles} // Use undefined here
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