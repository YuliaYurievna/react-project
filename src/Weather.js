import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kharkiv",
    temperature: 25,
    date: "Thusday | 14:14",
    description: "cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 31,
    wind: 6
  };

  return (
    <div className="Weather rounded">
      <form className="input-group mb-3 shadow search-form" id="search-form">
        <input
          type="search"
          className="form-control"
          placeholder="Enter a city"
          auto
        />
        <button
          className="btn btn-outline-dark ml-1 change-city-button"
          type="submit"
        >
          Search
        </button>
        <button
          className="btn btn-outline-dark ml-1 button-current-city"
          type="button"
        >
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </form>

      <div className="current-city">
        <div className="row ml-2">
          <div className="col-6">
            <h2 className="searched-city mb-0">{weatherData.city}</h2>
            <p className="date-now mb-0">Last updated: {weatherData.date}</p>
            <p className="description">{weatherData.description}</p>
            <ul className="weather-details list-unstyled">
              <li className="weather-details-list">
                Humidity: {weatherData.humidity}%
              </li>
              <li className="weather-details-list">
                Wind: {weatherData.wind} km/h
              </li>
            </ul>
          </div>
          <div className="col-2 p-0 pt-4 forecast-icon-now">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="forecast-icon-now"
            />
          </div>
          <div className="col-3 text-center pl-0 pt-4">
            <div className="weather-temperature">
              <strong className="degrees">{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}