import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecastWeatherData, setForecastWeatherData] = useState({
    city: props.city,
  });
  function handleForecast(response) {
    console.log(response.data);
  }
  const apiKey = "o599f3bbe3f722tbacc3ebf3032624a0";
  const apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
  axios.get(apiForecastUrl).then(handleForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Thursday
          <div>
            <img src="/" />
            <div>
              <span className="forecast-temp-max">19°</span>
              <span className="forecast-temp-min">17°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
