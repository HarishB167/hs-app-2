import { useState } from "react";
import Notification from "./common/notification";
import "./main.css";

const THEMES = {
  SUN_CLOUDED: 0,
  RAINY: 1,
};

const Main = () => {
  const [theme, setTheme] = useState(THEMES.SUN_CLOUDED);

  const getMainSkinClass = () => {
    if (theme == THEMES.SUN_CLOUDED) return " wa_main--sunClouded";
    else if (theme == THEMES.RAINY) return " wa_main--rainy";
  };

  const getContentSkinClass = () => {
    if (theme == THEMES.SUN_CLOUDED) return " wa_contentBg--sunClouded";
    else if (theme == THEMES.RAINY) return " wa_contentBg--rainy";
  };

  return (
    <div className={"wa_main" + getMainSkinClass()}>
      <div className="wa_row">
        <div className="wa_location">
          <span className="wa_locationIcon">
            <i class="fa-solid fa-location-dot"></i>
          </span>
          <span className="wa_locationText">Delhi</span>
          <span className="wa_locationOptions">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        <Notification />
      </div>
      <div className="wa_weatherIcon">
        <span className="wi wi-day-rain"></span>
      </div>
      <div className="wa_weatherDetails">
        <span className="wa_temperature">28º</span>
        <span className="wa_percipitations">Percipitation: 6%</span>
        <span className="wa_tempRange">Max: 31º Min: 25º</span>
      </div>
      <div className={"wa_moreStats" + getContentSkinClass()}>
        <span className="wa_moreStats_rain">
          <i class="fa-solid fa-cloud-rain"></i>
          6%
        </span>
        <span className="wa_moreStats_humidity">
          <i className="wi wi-humidity"></i>
          67%
        </span>
        <span className="wa_moreStats_windSpeed">
          <i className="wi wi-strong-wind"></i>
          25 km/h
        </span>
      </div>
    </div>
  );
};

export default Main;
