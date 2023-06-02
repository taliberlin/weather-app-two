import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
