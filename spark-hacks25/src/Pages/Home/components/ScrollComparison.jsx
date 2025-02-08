import React, { useState, useEffect } from 'react';
import './ScrollComparison.css';

const ScrollComparison = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const ball = document.getElementById('tinyBlueBall');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);

      // Update phase based on scroll percentage
      if (scrollPercentage < 0.3) {
        ball.style.width = '20px';
        ball.style.height = '20px';
        setPhase(0);
      } else if (scrollPercentage < 0.6) {
        ball.style.width = '50px';
        ball.style.height = '50px';
        setPhase(1);
      } else {
        ball.style.width = '200px';
        ball.style.height = '200px';
        setPhase(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-comparison">
      {/* Blue Ball */}
      <div className="tiny-blue-ball" id="tinyBlueBall"></div>

      {/* Content for Different Phases */}
      {phase === 2 && (
        <div className="comparison-content visible">
          <div className="comparison-panel">
            <h2>WITHOUT AQUALINK</h2>
            <div className="text-points">
              <p>Excess inventory costs</p>
              <p>Wasted materials</p>
              <p>Limited business connections</p>
              <p>Environmental impact</p>
            </div>
          </div>
        </div>
      )}
      {phase === 3 && (
        <div className="comparison-content visible">
          <div className="comparison-panel">
            <h2>WITH AQUALINK</h2>
            <div className="text-points">
              <p>40% cost reduction</p>
              <p>Zero waste operations</p>
              <p>Large business network</p>
              <p>Sustainable practices</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollComparison;
