import React from "react";
import { start } from "../stores/operations";
import { decremente, initInternval, initTime } from "../stores/timer";
import { useDispatch } from "react-redux";

function StartGame() {
  const dispatch = useDispatch();
  function launchGame() {
    dispatch(start());
    dispatch(initTime());
    dispatch(initInternval(setInterval(() => dispatch(decremente()), 1000)));
  }

  return (
    <div>
      <button onClick={() => launchGame()}>Start</button>
    </div>
  );
}

export default StartGame;
