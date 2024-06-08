'use client';   
import { useState, useEffect } from 'react';
import SessionCard from '@/ui/components/SessionCard';

/*styles*/
import './carouselSessionCard.scss';

const CarouselSession = ({ sessions } : { sessions : Array<object> } ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % sessions.length);
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sessions.length - 3 : prevIndex - 3
    );
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    const newIntervalId = setInterval(nextIndex, 5000);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    const newIntervalId = setInterval(nextIndex, 5000);
    setIntervalId(newIntervalId);
    return () => clearInterval(newIntervalId);
  }, []);

  useEffect(() => {
    resetInterval();
  }, [currentIndex]);

  return (
    <div className="carousel-sessionCard">
      <button onClick={prevIndex} className='btnPrev'>Previous</button>
      <div className="activity-session_card">
        {sessions.slice(currentIndex, currentIndex + 3).map((session, index) => (
          <SessionCard item={session} key={`sessionCard-${index}`} />
        ))}
      </div>
      <button onClick={nextIndex} className='btnNext'>Next</button>
    </div>
  );
};

export default CarouselSession;
