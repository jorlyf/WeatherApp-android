import React from "react";
import "./now-weather.css";

const NowWeather = ({
  temperature,
  units,
}) => {
  return (
    <div className="now-weather">
      <div className="center">
        <span>{`${temperature}${units.temperature}`}</span>
      </div>
    </div>
  );
};

export default NowWeather;
