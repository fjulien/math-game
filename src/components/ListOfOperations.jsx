import React from "react";
import { operationsState } from "../stores/operations";
import { useSelector } from "react-redux";
import { isEndGame } from "../stores/timer";

function ListOfOperations() {
  const { all } = useSelector(operationsState);
  const isEnd = useSelector(isEndGame);

  function attributClass(operation, index) {
    if (index === 0 && isEnd) return "hidden";
    if (index === 0) return "first-operation";
    return operation.success ? "success" : "fail";
  }
  return (
    <ul>
      <li className={!isEnd ? "hidden" : ""}>End Game !!!</li>
      {all.map((operation, index) => (
        <li key={index} className={attributClass(operation, index)}>
          {operation.text}
          {operation.success ? operation.response : "?"}
        </li>
      ))}
    </ul>
  );
}

export default ListOfOperations;
