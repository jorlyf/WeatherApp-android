import React from "react";
import WeatherIcon, { weatherCodeToIconId } from "./weather-icon";
import "./now-weather.css";

const NowWeather = ({
  temperature,
  relativeHumidity,
  code,
  units,
}) => {
  return (
    <div className="now-weather">
      <div className="icon">
        <WeatherIcon id={weatherCodeToIconId(code)} size={64} />
      </div>

      <div className="center">
        <span>{`${temperature}${units.temperature}`}</span>
        <span>{`Отн. влаж: ${relativeHumidity}${units.relativeHumidity}`}</span>
      </div>
    </div>
  );
};

export default NowWeather;
