"use client";
import { useCallback, useEffect, useState } from "react";
import SessionCard from "@/ui/components/SessionCard";
import { ISessions } from "@/lib/dataBase/models/types";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./carouselSessionCard.scss";

const CarouselSession = ({ sessions }: { sessions: ISessions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % sessions.length);
  }, [sessions.length]);

  const prevIndex = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sessions.length - 2 : prevIndex - 2
    );
  }, [sessions.length]);

  useEffect(() => {
    if (isHovered) return;

    const intervalId = setInterval(nextIndex, 5000);

    return () => clearInterval(intervalId);
  }, [nextIndex, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderDots = () => {
    const dotCount = Math.ceil(sessions.length / 2);
    return (
      <div className="carousel-dots">
        {Array.from({ length: dotCount }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === Math.floor(currentIndex / 2) ? "active" : ""}`}
          ></span>
        ))}
      </div>
    );
  };

  return (
    <div
      className="carousel-sessionCard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={prevIndex} className="btnPrev">
        <BsArrowLeftCircleFill className="svg" />
      </button>
      <div className="activity-session_card">
        {sessions
          .slice(currentIndex, currentIndex + 2)
          .map((session) => (
            <SessionCard item={session} key={`sessionCard-${session._id}`} />
          ))}
      </div>
      <button onClick={nextIndex} className="btnNext">
        <BsArrowRightCircleFill className="svg" />
      </button>
      {renderDots()}
    </div>
  );
};

export default CarouselSession;
