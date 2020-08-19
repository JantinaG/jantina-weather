import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CityWeather from "./CityWeather";
import CurrentLocation from "./CurrentLocation";
import Footer from "./Footer";
import Forecast from "./Forecast";
import RiddleBox from "./RiddleBox";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="card card-body">
          <div className="container">
            <div className="row">
              <CityWeather defaultCity="Doolin" />
              <div className="col-4">
                <div className="row">
                  <Search />
                  <CurrentLocation />
                </div>
                <RiddleBox />
              </div>
            </div>
            <Forecast />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
