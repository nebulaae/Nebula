import React, { useEffect, useRef, useState } from 'react';

interface DecodeTextProps {
  text: string;
  className?: string;
  refreshInterval?: number; // in milliseconds
}

export const DecodeText: React.FC<DecodeTextProps> = ({
  text,
  className = '',
  refreshInterval = 10000,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  
  useEffect(() => {
    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasPlayed) {
      decodeText();
      setHasPlayed(true);
    }
    
    let interval: NodeJS.Timeout | null = null;
    
    if (isVisible) {
      interval = setInterval(decodeText, refreshInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible, refreshInterval, hasPlayed]);

  const decodeText = () => {
    if (!containerRef.current) return;
    
    const textElements = containerRef.current.querySelectorAll('.text-animation');
    
    // Reset all states
    textElements.forEach(element => {
      element.classList.remove('state-1', 'state-2', 'state-3');
    });
    
    // Create array of indices
    const state = Array.from({ length: textElements.length }, (_, i) => i);
    
    // Shuffle the array to get new sequences each time
    const shuffled = shuffle([...state]);
    
    shuffled.forEach((index, i) => {
      const child = textElements[index];
      
      // Fire the first one at random times
      const state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
      setTimeout(() => firstStages(child), state1Time);
    });
  };

  const firstStages = (child: Element) => {
    if (child.classList.contains('state-2')) {
      child.classList.add('state-3');
    } else if (child.classList.contains('state-1')) {
      child.classList.add('state-2');
    } else if (!child.classList.contains('state-1')) {
      child.classList.add('state-1');
      setTimeout(() => secondStages(child), 100);
    }
  };

  const secondStages = (child: Element) => {
    if (child.classList.contains('state-1')) {
      child.classList.add('state-2');
      setTimeout(() => thirdStages(child), 100);
    } else if (!child.classList.contains('state-1')) {
      child.classList.add('state-1');
    }
  };

  const thirdStages = (child: Element) => {
    if (child.classList.contains('state-2')) {
      child.classList.add('state-3');
    }
  };

  const shuffle = (array: number[]) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // Split text into individual characters
  const characters = text.split('');

  return (
    <div 
      ref={containerRef} 
      className={`decode-text ${className}`}
    >
      {characters.map((char, index) => (
        char === ' ' ? (
          <div key={index} className="space"></div>
        ) : (
          <div key={index} className="text-animation">{char}</div>
        )
      ))}
      <style jsx>{`
        .decode-text {
          width: 100%;
          font-size: 30px;
          text-align: center;
        }
        .space {
          display: inline-block;
          width: 10px;
        }
        .text-animation {
          display: inline-block;
          position: relative;
          color: transparent;
          text-transform: uppercase;
        }
        .text-animation:before {
          content: "";
          color: black;
          position: absolute;
          top: 50%;
          left: 50%;
          background: #0e182d;
          width: 0;
          height: 1.2em;
          transform: translate(-50%, -55%);
        }
        .text-animation.state-1:before {
          width: 1px;
        }
        .text-animation.state-2:before {
          width: 0.9em;
        }
        .text-animation.state-3 {
          color: black;
        }
        .text-animation.state-3:before {
          width: 0;
        }
      `}</style>
    </div>
  );
};