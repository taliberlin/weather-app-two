import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row m-2">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city..."
              autoFocus
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1 className="ms-4 mt-3 mb-0">Vancouver</h1>
      <ul>
        <li>Sunday 14:03</li>
        <li>Partly Sunny</li>
      </ul>
      <div className="row ms-2">
        <div className="col-6 clearfix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
            className="float-start me-2"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
