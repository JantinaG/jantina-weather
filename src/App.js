import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CityWeather from "./CityWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="card card-body">
          <CityWeather />
        </div>
        <Footer />
      </div>
    </div>
  );
}
