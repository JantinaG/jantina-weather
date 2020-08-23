import React from "react";
import "./styles.css";

export default function ForecastDisplay(props) {
  let img = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  return (
    <div class="col-sm-2 fiveDay">
      <h6>{hours()}</h6>
      <img src={img} alt={props.data.weather[0].description} />
      <p class="text-muted">
        <strong>{Math.round(props.data.main.temp_max)}*C</strong>/
        {Math.round(props.data.main.temp_min)}
        *C
      </p>
    </div>
  );
}
