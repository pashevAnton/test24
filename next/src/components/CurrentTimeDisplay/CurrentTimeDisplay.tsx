'use client'

import React, { FC, useEffect, useState } from "react";
import "./CurrentTimeDisplay.css";
import dynamic from "next/dynamic";

const CurrentTimeDisplay: FC = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="current-time-display" data-time={currentTime?.toString()}>
      <div className="current-time-display__time">
        {currentTime?.toString()}
      </div>
    </div>
  );
};

export { CurrentTimeDisplay };
