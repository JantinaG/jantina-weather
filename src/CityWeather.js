import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import CurrentLocation from "./CurrentLocation";
import RiddleBox from "./RiddleBox";
import WeatherInfo from "./WeatherInfo";

export default function CityWeather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleData(response) {
    setData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    let apiKey = "3c57a9d63873260ca8362886141d8b51";
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

  if (data.ready) {
    return (
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
            <CurrentLocation />
          </div>
          <RiddleBox />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
