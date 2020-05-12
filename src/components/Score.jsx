import React from "react";
import { useSelector } from "react-redux";
import { timeState } from "../stores/timer";
import { operationsState } from "../stores/operations";

function Score() {
  const operations = useSelector(operationsState);

  return (
    <div>{`Temps: ${useSelector(timeState)}s | Score: ${
      operations.score
    }`}</div>
  );
}

export default Score;
