import React from "react";
import "./weather-icon.css";

export const WeatherIconIds = {
  sunny: 100,
  sunnyClouds: 101,
  clouds: 104,
  night: 150,
  nightClouds: 151,
  storm: 302,
  drizzle: 306,
  rain: 314,
  snow: 401,
  fog: 500,
};

export const weatherCodeToIconId = (code) => {
  switch (code) {
    case 0:
      return WeatherIconIds.sunny;
    case 1:
    case 2:
    case 3:
      return WeatherIconIds.sunnyClouds;
    case 45:
    case 48:
      return WeatherIconIds.fog;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return WeatherIconIds.drizzle;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return WeatherIconIds.rain;
    case 71:
    case 73:
    case 75:
    case 77:
    case 80:
    case 81:
    case 82:
    case 85:
    case 86:
      return WeatherIconIds.snow;
    case 95:
    case 96:
    case 99:
      return WeatherIconIds.storm;
    default:
      return WeatherIconIds.sunny;
  }
};

const WeatherIcon = ({
  id,
  size = 24,
}) => {
  return (
    <div className="weather-icon" style={{ fontSize: size }}>
      <i className={`qi-${id}`}></i>
    </div>
  );
};

export default WeatherIcon;
