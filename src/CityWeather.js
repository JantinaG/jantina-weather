import React from "react";
import "./styles.css";

export default function CityWeather() {
  let data = {
    city: "Doolin",
    date: "18 July 2020",
    day: "Saturday",
    time: "21:25",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    description: "Cold Sunny",
    temp: 10,
    wind: 11,
    humidity: 20,
  };

  return (
    <div className="col-8">
      <div className="row">
        <div className="col-8 cityDates">
          <h1>{data.city}</h1>
        </div>
        <div className="col-4 cityDates">
          <h6>{data.date}</h6>
          <h6>
            {data.day}, {data.time}
          </h6>
        </div>
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
}
