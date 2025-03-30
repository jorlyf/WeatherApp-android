import citiesJson from "../assets/cities.json";
import testWeatherDataJson from "../assets/test_weather.json";

export const wait = async (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

export const getWeather = async (city, days) => {
  // await wait(2000);
  // return testWeatherDataJson;

  const latitude = 56;
  const longitude = 53.2167;

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m&timezone=auto&forecast_days=${days}`,
  );

  return await response.json();
};

export const getCityCoordinates = async (city) => {
};

export const getCities = async () => {
  // await wait(3000);
  return citiesJson;
};
