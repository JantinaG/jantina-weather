import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function CurrentLocation() {
  return (
    <div className="col-2 padding">
      <button className="location">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <i className="fas fa-map-marker-alt" />
      </button>
    </div>
  );
}
