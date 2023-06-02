import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data[0].temperature.maximum);
    return `${maxTemp}°`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data[0].temperature.minimum);
    return `${minTemp}°`;
  }
  function day() {
    let date = new Date(props.data[0].time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  console.log(props.data[0]);
  return (
    <div className="ForecastDay">
      <div>{day()}</div>
      <div>
        <img
          src={props.data[0].condition.icon_url}
          alt={props.data[0].condition.description}
        />
      </div>
      <div>
        <span className="forecast-temp-max">{maxTemperature()}</span>
        <span className="forecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
