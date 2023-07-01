import { useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import Notification from "./common/notification";
import weatherService from "../../services/weatherService";
import "react-bootstrap-typeahead/css/Typeahead.css";
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

  clear_sky: <i className="wi wi-day-sunny"></i>,
  few_clouds: <i className="wi wi-day-cloudy"></i>,
  scattered_clouds: <i className="wi wi-cloud"></i>,
  broken_clouds: <i className="wi wi-day-cloudy"></i>,
  shower_rain: <i className="wi wi-showers"></i>,
  rain: <i className="wi wi-day-rain"></i>,
  thunderstorm: <i className="wi wi-day-lightning"></i>,
  snow: <i className="wi wi-snowflake-cold"></i>,
  mist: <i className="wi wi-fog"></i>,
};

const THEMES = {
  SUN_CLOUDED: 0,
  RAINY: 1,
};

const DEFAULT_CITY = "DELHI";

const Main = () => {
  const [theme, setTheme] = useState(THEMES.SUN_CLOUDED);

  const [weatherData, setWeatherData] = useState();
  const [locationsAutoComplete, setLocationsAutoComplete] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadFirstCityData = async () => {
      const data = await weatherService.getLocationListFor(DEFAULT_CITY);
      const city = data[0];
      loadDataForCity(city.location, { lat: city.lat, lon: city.lon });
    };
    loadFirstCityData();
  }, []);

  const loadDataForCity = async (city, latLon) => {
    setIsLoading(true);
    const weather = await weatherService.getWeatherForCity(city, latLon);
    setWeatherData(weather);
    setIsLoading(false);
  };

  const handleLocationChange = async (location) => {
    if (location.length > 0) {
      const city = location[0];
      loadDataForCity(city.location, { lat: city.lat, lon: city.lon });
    }
  };

  const handleLocationInputChange = async (value) => {
    if (value) {
      const data = await weatherService.getLocationListFor(value);
      setLocationsAutoComplete(data);
    }
  };

  const getMainSkinClass = () => {
    if (theme === THEMES.SUN_CLOUDED) return " wa_main--sunClouded";
    else if (theme === THEMES.RAINY) return " wa_main--rainy";
  };

  const getContentSkinClass = () => {
    if (theme === THEMES.SUN_CLOUDED) return " wa_contentBg--sunClouded";
    else if (theme === THEMES.RAINY) return " wa_contentBg--rainy";
  };

  if (!weatherData) return <div>Fetching...</div>;

  return (
    <div className={"wa_main" + getMainSkinClass()}>
      <div className="wa_row">
        <div className="wa_location">
          <span className="wa_locationIcon">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <Typeahead
            id="location"
            options={locationsAutoComplete}
            labelKey="location"
            placeholder="Search for a location..."
            onChange={handleLocationChange}
            onInputChange={handleLocationInputChange}
            className="wa_locationText_autocomplete"
            defaultInputValue={DEFAULT_CITY}
          />
          {isLoading && (
            <span className="wa_loadingSpinner">
              <i class="fa-solid fa-spinner fa-spin-pulse"></i>
            </span>
          )}
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
            <i className="fa-solid fa-cloud-rain"></i>
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
              <i className="fa-regular fa-calendar"></i>
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
