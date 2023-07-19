'use client'

import React, { FC, useEffect, useState } from "react";
import "./CurrentTimeDisplayWithWidget.css";

const CurrentTimeDisplayWithWidget: FC = () => {
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
    <div
      className="current-time-display-with-widget"
      data-time={currentTime?.toString()}
    >
      <div className="current-time-display-with-widget__time">
        {currentTime?.toString()}
      </div>
      {/*  PUT_WIDGET_HERE */}
    </div>
  );
};

export { CurrentTimeDisplayWithWidget };
