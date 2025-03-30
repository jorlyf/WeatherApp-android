import React from "react";
import "./weather-icon.css";

export const WeatherIconIds = {
  sunny: 100,
  sunnyClouds: 101,
  clouds: 104,
  night: 150,
  nightClouds: 151,
  sunnyRain: 300,
  storm: 302,
  rain: 306,
};

const WeatherIcon = ({
  id,
}) => {
  return (
    <div className="weather-icon">
      <i className={`qi-${id}`}></i>
    </div>
  );
};

export default WeatherIcon;
