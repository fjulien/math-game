import React from "react";
import { operationsState } from "../stores/operations";
import { useSelector } from "react-redux";
import { isEndGame } from "../stores/timer";
import "./ListOfOperations.scss";

function ListOfOperations() {
  const { all } = useSelector(operationsState);
  const isEnd = useSelector(isEndGame);

  function attributClass(operation, index) {
    if (index === 0 && isEnd) return "hidden";
    if (index === 0) return "first-operation";
    return operation.success ? "success" : "fail";
  }
  return (
    <ul className="ListOfOperations">
      <li className={!isEnd ? "hidden" : "show-response"}>
        Fin de la partie !!!
      </li>
      {all.map((operation, index) => (
        <li
          key={index}
          className={`${attributClass(operation, index)} ${
            isEnd ? "show-response" : ""
          }`}
        >
          {operation.text}
          {operation.success ? operation.response : "?"}
        </li>
      ))}
    </ul>
  );
}

export default ListOfOperations;
