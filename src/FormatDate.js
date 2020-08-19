import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateNr = props.date.getDate();
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  let time = `${hours}:${minutes}`;

  return (
    <div className="col-4 cityDates">
      <h6>
        {dateNr} {month} {year}
      </h6>
      <h6>
        {day}, {time}
      </h6>
    </div>
  );
}
