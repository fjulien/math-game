import React from "react";
import { start } from "../store/operations/operations";
import { useDispatch } from "react-redux";

function StartGame() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(start())}>Start</button>
    </div>
  );
}

export default StartGame;
