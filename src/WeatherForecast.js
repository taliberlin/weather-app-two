import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastWeatherData, setForecastWeatherData] = useState(null);
  function handleForecast(response) {
    setLoaded(true);
    setForecastWeatherData(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecastWeatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "o599f3bbe3f722tbacc3ebf3032624a0";
    const apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiForecastUrl).then(handleForecast);
  }
}
