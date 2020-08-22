import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CityWeather from "./CityWeather";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="card card-body">
          <div className="container">
            <CityWeather defaultCity="Doolin" />
            <Forecast />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
