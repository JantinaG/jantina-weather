import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="col-8">
      <div className="row">
        <div className="col-8 cityDates">
          <h1>
            {props.data.city}, {props.data.country}
          </h1>
        </div>
        <FormatDate date={props.data.date} />
        <div className="col-6 middleBlock">
          <img
            src={props.data.imgURL}
            className="mx-auto d-block"
            alt={props.data.description}
          />
        </div>
        <div className="col-6 middleBlock">
          <p className="active">
            {props.data.temp}
            <a href="/" className="active">
              {" "}
              *C{" "}
            </a>
            <a href="/" className="inactive">
              *F{" "}
            </a>
          </p>
          <p className="description">{props.data.description}</p>
        </div>
      </div>
      <div className="row text-center windHum">
        <div className="col-6">
          <p>
            <strong> Wind:</strong> {props.data.wind} km/h
          </p>
        </div>
        <div className="col-6">
          <p>
            <strong> Humidity:</strong> {props.data.humidity}%
          </p>
        </div>
      </div>
    </div>
  );
}