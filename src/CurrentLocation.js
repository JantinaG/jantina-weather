import React from "react";
import "./styles.css";

export default function CurrentLocation() {
  return (
    <div className="col-2 padding">
      <button className="location">
        <i className="fas fa-map-marker-alt" />
      </button>
    </div>
  );
}
