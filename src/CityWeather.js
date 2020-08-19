import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function CityWeather(props) {
  const [data, setData] = useState({ ready: false });

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

  if (data.ready) {
    return (
      <div className="col-8">
        <div className="row">
          <div className="col-8 cityDates">
            <h1>
              {data.city}, {data.country}
            </h1>
          </div>
          <FormatDate date={data.date} />

          <div className="col-6 middleBlock">
            <img
              src={data.imgURL}
              className="mx-auto d-block"
              alt={data.description}
            />
          </div>
          <div className="col-6 middleBlock">
            <p className="active">
              {data.temp}
              <a href="/" className="active">
                {" "}
                *C{" "}
              </a>
              <a href="/" className="inactive">
                *F{" "}
              </a>
            </p>
            <p className="description">{data.description}</p>
          </div>
        </div>
        <div className="row text-center windHum">
          <div className="col-6">
            <p>
              <strong> Wind:</strong> {data.wind} km/h
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Humidity:</strong> {data.humidity}%
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3c57a9d63873260ca8362886141d8b51";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleData);

    return "Loading...";
  }
}
