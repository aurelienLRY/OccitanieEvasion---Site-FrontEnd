"use client";
import { useCallback, useEffect, useState } from "react";
import SessionCard from "@/ui/components/SessionCard";

import { ISessions } from "@/lib/models/types"; 

/*styles*/
import "./carouselSessionCard.scss";


const CarouselSession = ({ sessions } : {sessions : ISessions}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const nextIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % sessions.length);
  }, [sessions.length]);

  const prevIndex = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sessions.length - 2 : prevIndex - 2
    );
  }, [sessions.length]);

  const resetInterval = useCallback(() => {
    if (intervalId) clearInterval(intervalId);
    const newIntervalId = setInterval(nextIndex, 5000);
    setIntervalId(newIntervalId);
  }, [intervalId, nextIndex]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetInterval]);

  useEffect(() => {
    resetInterval();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="carousel-sessionCard">
      <button onClick={prevIndex} className="btnPrev">
        Previous
      </button>
      <div className="activity-session_card">
        {sessions 
          .slice(currentIndex, currentIndex + 2)
          .map((session, index) => (
            <SessionCard item={session} key={`sessionCard-${index}`} />
          ))}
      </div>
      <button onClick={nextIndex} className="btnNext">
        Next
      </button>
    </div>
  );
}

export default CarouselSession;
