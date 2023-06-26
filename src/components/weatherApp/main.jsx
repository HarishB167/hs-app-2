import { useState } from "react";
import Notification from "./common/notification";
import "./main.css";

// Weather font source : https://erikflowers.github.io/weather-icons/

// Api weather to weather font map
const weatherApiToFont = {
  day_clouded: <i className="wi wi-day-cloudy"></i>,
  clouded: <i className="wi wi-cloud"></i>,
  night_clouded: <i className="wi wi-night-alt-cloudy"></i>,
  rainy: <i className="wi wi-rain"></i>,
  day_lightening: <i className="wi wi-day-lightning"></i>,
  day_showers: <i className="wi wi-day-showers"></i>,
};

const THEMES = {
  SUN_CLOUDED: 0,
  RAINY: 1,
};

const Main = () => {
  const [theme, setTheme] = useState(THEMES.SUN_CLOUDED);

  const [weatherData, setWeatherData] = useState({
    location: "Delhi",
    weatherToday: "day_clouded",
    temperature: 28,
    temperatureMin: 34,
    temperatureMax: 28,
    rain: "6%",
    humidiy: "67%",
    windSpeed: "25 km/h",
    date: "Mar, 10",
    todayHourlyStats: [
      { time: "15.00", temperature: "31", weather: "day_clouded" },
      { time: "16.00", temperature: "30", weather: "day_clouded" },
      { time: "17.00", temperature: "28", weather: "clouded" },
      { time: "18.00", temperature: "28", weather: "night_clouded" },
    ],
    weekForecast: [
      {
        day: "Monday",
        weather: "rainy",
        temperatureMin: "10",
        temperatureMax: "13",
      },
      {
        day: "Tuesday",
        weather: "day_lightening",
        temperatureMin: "17",
        temperatureMax: "12",
      },
      {
        day: "Wednesday",
        weather: "day_showers",
        temperatureMin: "21",
        temperatureMax: "18",
      },
    ],
  });

  const getMainSkinClass = () => {
    if (theme === THEMES.SUN_CLOUDED) return " wa_main--sunClouded";
    else if (theme === THEMES.RAINY) return " wa_main--rainy";
  };

  const getContentSkinClass = () => {
    if (theme === THEMES.SUN_CLOUDED) return " wa_contentBg--sunClouded";
    else if (theme === THEMES.RAINY) return " wa_contentBg--rainy";
  };

  return (
    <div className={"wa_main" + getMainSkinClass()}>
      <div className="wa_row">
        <div className="wa_location">
          <span className="wa_locationIcon">
            <i class="fa-solid fa-location-dot"></i>
          </span>
          <span className="wa_locationText">{weatherData.location}</span>
          <span className="wa_locationOptions">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        <Notification />
      </div>
      <div className="wa_weatherOverview">
        <div className="wa_weatherIcon">
          {weatherApiToFont[weatherData.weatherToday]}
        </div>
        <div className="wa_weatherDetails">
          <span className="wa_temperature">{weatherData.temperature}º</span>
          <span className="wa_percipitations">
            Percipitation: {weatherData.rain}
          </span>
          <span className="wa_tempRange">
            Max: {weatherData.temperatureMax}º Min: {weatherData.temperatureMin}
            º
          </span>
        </div>
        <div className={"wa_moreStats" + getContentSkinClass()}>
          <span className="wa_moreStats_rain">
            <i class="fa-solid fa-cloud-rain"></i>
            {weatherData.rain}
          </span>
          <span className="wa_moreStats_humidity">
            <i className="wi wi-humidity"></i>
            {weatherData.humidiy}
          </span>
          <span className="wa_moreStats_windSpeed">
            <i className="wi wi-strong-wind"></i>
            {weatherData.windSpeed}
          </span>
        </div>
      </div>
      <div className="wa_weatherContent">
        <div className={"wa_todayStats" + getContentSkinClass()}>
          <div className="wa_todayStats_header">
            <span className="wa_todayStats_header_label">Today</span>
            <span>{weatherData.date}</span>
          </div>
          <div className="wa_todayStats_hourly">
            {weatherData.todayHourlyStats.map((item, idx) => (
              <div key={idx} className="wa_todayStats_cardWeather">
                <span className="wa_todayStats_cardWeather_temp">
                  {item.temperature}
                </span>
                <span className="wa_todayStats_cardWeather_weather">
                  {weatherApiToFont[item.weather]}
                </span>
                <span className="wa_todayStats_cardWeather_time">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={"wa_weekForecast" + getContentSkinClass()}>
          <div className="wa_weekForecast_header">
            <span className="wa_weekForecast_header_label">Next Forecast</span>
            <span>
              <i class="fa-regular fa-calendar"></i>
            </span>
          </div>
          <div className="wa_weekForecast_list">
            {weatherData.weekForecast.map((item, idx) => (
              <div key={idx} className="wa_weekForecast_day">
                <span className="wa_weekForecast_dayName">{item.day}</span>
                <span className="wa_weekForecast_weather">
                  {weatherApiToFont[item.weather]}
                </span>
                <span className="wa_weekForecast_temperature">
                  <span className="wa_weekForecast_tempMax">
                    {item.temperatureMax}ºc
                  </span>
                  <span className="wa_weekForecast_tempMin">
                    {item.temperatureMin}ºc
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
