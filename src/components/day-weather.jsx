import React from "react";
import "./day-weather.css";
import WeatherIcon, { WeatherIconIds } from "./weather-icon";

const getWeekday = (date) =>
  date.toLocaleDateString({ language: "ru", caseFirst: "upper" }, {
    weekday: "short",
  });

const getDayMonth = (date) => {
  if (date.getDay() === new Date().getDay()) return "Сегодня";
  return date.toLocaleDateString({ language: "ru" }, {
    month: "long",
    day: "2-digit",
  });
};

const DayWeather = ({
  date,
  temperatureDay,
  temperatureNight,
  units,
}) => {
  const weekday = getWeekday(date);
  const dayMonth = getDayMonth(date);

  return (
    <div className="day-weather">
      <span className="date">{`${weekday}, ${dayMonth}`}</span>
      <div className="right">
        <div>
          <WeatherIcon id={WeatherIconIds.sunny} />
          <span>{`${temperatureDay}${units.temperature}`}</span>
        </div>
        <div>
          <WeatherIcon id={WeatherIconIds.night} />
          <span>{`${temperatureNight}${units.temperature}`}</span>
        </div>
      </div>
    </div>
  );
};

export default DayWeather;
