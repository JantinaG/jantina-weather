import React from "react";
import "./styles.css";

export default function RiddleBox(props) {
  let hours = props.time.getHours();
  let riddle = [
    "What can you hold in your right hand but not your left?",
    "Which word in the dictionary is spelled incorrectly?",
    "What two things can you never eat for breakfast?",
    "How do you write cow with 13 letters?",
    "What is black when it's clean and white when it's dirty?",
    "What has so many keys but can't open a door?",
    "What's the only room from which no one can enter or leave?",
    "What breaks when you say it",
    "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
    "What has 13 hearts, but no other organs?",
    "When 5 machines in 5 minutes produce 5 toy cars. How long do 100 machines take to produce 100 toy cars?",
    "What can you catch but not throw?",
  ];
  let riddleAnswer = [
    "Answer: Your right elbow",
    "Answer: Incorrectly",
    "Answer: Lunch and dinner",
    "Answer: SEE-O-DOUBLE-YOU",
    "Answer: A black chalkboard",
    "Answer: A piano",
    "Answer: A mushroom",
    "Answer: Silence",
    "Answer: A river",
    "Answer: A deck of cards",
    "Answer: 5 minutes",
    "Answer: Your breath / An illness",
  ];

  if (hours === 1 || hours === 13) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[0]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[0]}</small>
        </p>
      </div>
    );
  }

  if (hours === 2 || hours === 14) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[1]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[1]}</small>
        </p>
      </div>
    );
  }

  if (hours === 3 || hours === 15) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[2]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[2]}</small>
        </p>
      </div>
    );
  }

  if (hours === 4 || hours === 16) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[3]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[3]}</small>
        </p>
      </div>
    );
  }

  if (hours === 5 || hours === 17) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[4]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[4]}</small>
        </p>
      </div>
    );
  }

  if (hours === 6 || hours === 18) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[5]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[5]}</small>
        </p>
      </div>
    );
  }

  if (hours === 7 || hours === 19) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[6]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[6]}</small>
        </p>
      </div>
    );
  }

  if (hours === 8 || hours === 20) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[7]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[7]}</small>
        </p>
      </div>
    );
  }

  if (hours === 9 || hours === 21) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[8]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[8]}</small>
        </p>
      </div>
    );
  }

  if (hours === 10 || hours === 22) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[9]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[9]}</small>
        </p>
      </div>
    );
  }

  if (hours === 11 || hours === 23) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[10]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[10]}</small>
        </p>
      </div>
    );
  }

  if (hours === 12 || hours === 0) {
    return (
      <div className="col-12 riddleBox">
        <h5 className="text-center">Riddle of the hour:</h5>
        <p> {riddle[11]}</p>
        <p className="riddleAnswer">
          <small>{riddleAnswer[11]}</small>
        </p>
      </div>
    );
  }
}
