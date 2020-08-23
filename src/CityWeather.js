import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import RiddleBox from "./RiddleBox";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function CityWeather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(null);

  function handleData(response) {
    setData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(),
      description: response.data.weather[0].description,
      imgURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "3c57a9d63873260ca8362886141d8b51";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityName(event) {
    setCity(event.target.value);
  }

  function displayLocation(position) {
    const apiKey = "3c57a9d63873260ca8362886141d8b51";
    let currentLat = position.coords.latitude;
    let currentLong = position.coords.longitude;
    let urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLong}&appid=${apiKey}&units=metric`;

    axios.get(urlLocation).then(handleData);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(displayLocation);
  }

  if (data.ready) {
    return (
      <div className="container">
        <div className="row">
          <WeatherInfo data={data} />
          <div className="col-4">
            <div className="row">
              <div className="col-10 padding">
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control search"
                    type="search"
                    placeholder="🔍 Search"
                    autoComplete="off"
                    onChange={handleCityName}
                  />
                </form>
              </div>
              <div className="col-2 padding">
                <button className="location" onClick={getLocation}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <i className="fas fa-map-marker-alt" />
                </button>
              </div>
            </div>
            <RiddleBox time={data.date} />
          </div>
        </div>
        <Forecast city={data.city} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>Search a city</h1>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-10 padding">
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control search"
                    type="search"
                    placeholder="🔍 Search"
                    autoComplete="off"
                    onChange={handleCityName}
                  />
                </form>
              </div>
              <div className="col-2 padding">
                <button className="location" onClick={getLocation}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <i className="fas fa-map-marker-alt" />
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}
