import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import ForcastDisplay from "./ForecastDisplay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row text-center">
        <ForcastDisplay data={forecast.list[0]} />
        <ForcastDisplay data={forecast.list[1]} />
        <ForcastDisplay data={forecast.list[2]} />
        <ForcastDisplay data={forecast.list[3]} />
        <ForcastDisplay data={forecast.list[4]} />
        <ForcastDisplay data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "3c57a9d63873260ca8362886141d8b51";
    let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(forecastURL).then(handleForecast);

    return "Loading...";
  }
}
