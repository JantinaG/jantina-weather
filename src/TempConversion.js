import React, { useState } from "react";

export default function TempConversions(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <p className="active">
        {props.celsius}
        <span className="active"> *C </span>
        <a href="/" className="inactive" onClick={displayFahrenheit}>
          *F{" "}
        </a>
      </p>
    );
  } else {
    return (
      <p className="active">
        {Math.round((props.celsius * 9) / 5 + 32)}
        <a href="/" className="inactive" onClick={displayCelsius}>
          {" "}
          *C{" "}
        </a>
        <span className="active">*F </span>
      </p>
    );
  }
}
