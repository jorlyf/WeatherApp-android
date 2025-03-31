import citiesJson from "../assets/cities.json";
import testWeatherDataJson from "../assets/test_weather.json";

export const wait = async (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

export const getWeather = async (city, days) => {
  await wait(1000);
  const coordinates = await getCityCoordinates(city);

  const { latitude, longitude } = coordinates;

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto&forecast_days=${days}`,
  );

  return await response.json();
};

export const getCityCoordinates = async (city) => {
  const apiKey = "GwfSoeAp3LSI949auNdBfg==4SxdiUaKX9N9uhTw";
  const response = await fetch(
    `https://api.api-ninjas.com/v1/city?name=${city}`,
    {
      headers: {
        "X-Api-Key": apiKey,
      },
    },
  );

  return (await response.json())[0];
};

export const getCities = async () => {
  return citiesJson;
};
