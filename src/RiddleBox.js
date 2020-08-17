import React from "react";
import "./styles.css";

export default function RiddleBox() {
  return (
    <div className="col-12 riddleBox">
      <h5 className="text-center">Riddle of the hour:</h5>
      <p> What has teeth but can't bite? </p>
      <p className="riddleAnswer">
        <small> A comb or zipper</small>
      </p>
    </div>
  );
}
