import React from "react";
import { getWeather } from "./api";
import Header from "./components/header";
import DayWeather from "./components/day-weather";
import NowWeather from "./components/now-weather";
import { Spin } from "antd";
import "./app.css";
import "qweather-icons/font/qweather-icons.css";

const SHOW_DAYS = 7;

const LS_CITY = "city";

const App = () => {
  const [selectedCityName, setSelectedCityName] = React.useState(
    localStorage.getItem(LS_CITY) === "null"
      ? null
      : localStorage.getItem(LS_CITY),
  );

  const [data, setData] = React.useState(null);
  const isDataLoading = data == null;

  const dataDays = React.useMemo(() => {
    if (data == null) return [];

    const days = [];
    for (let dayIndex = 0; dayIndex < SHOW_DAYS; dayIndex++) {
      const day = {
        date: new Date(data.daily.time[dayIndex]),
        temperatureDay: Math.round(data.daily.temperature_2m_max[dayIndex]),
        temperatureNight: Math.round(data.daily.temperature_2m_min[dayIndex]),
      };

      days.push(day);
    }
    return days;
  }, [data]);

  const dataUnits = React.useMemo(() => {
    if (data == null) return null;

    return {
      temperature: "°",
      relativeHumidity: data.current_units.relative_humidity_2m,
    };
  }, [data]);

  React.useEffect(() => {
    setData(null);

    if (selectedCityName == null) return;

    let aborted = false;

    getWeather(selectedCityName, SHOW_DAYS)
      .then((x) => {
        if (aborted) return;
        setData(x);
      });

    return () => aborted = true;
  }, [selectedCityName]);

  React.useEffect(() => {
    localStorage.setItem(LS_CITY, selectedCityName);
  }, [selectedCityName]);

  return (
    <div className="app">
      <Header
        selectedCityName={selectedCityName}
        setSelectedCityName={setSelectedCityName}
      />

      <main>
        {isDataLoading && <Spin />}
        {!isDataLoading &&
          (
            <>
              <NowWeather
                temperature={data.current.temperature_2m}
                units={dataUnits}
              />

              <div className="days">
                {dataDays.map((day) => (
                  <DayWeather
                    key={day.date.toISOString()}
                    date={day.date}
                    temperatureDay={day.temperatureDay}
                    temperatureNight={day.temperatureNight}
                    units={dataUnits}
                  />
                ))}
              </div>
            </>
          )}
      </main>
    </div>
  );
};

export default App;
