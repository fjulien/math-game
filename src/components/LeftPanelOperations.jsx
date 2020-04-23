import React from "react";
import { operationsState } from "../store/operations/operations";
import { useSelector } from "react-redux";

function LeftPanelOperations() {
  const { all } = useSelector(operationsState);
  function attributClass(operation, index) {
    if (index === 0) return "first-operation";
    return operation.success ? "success" : "fail";
  }
  return (
    <ul>
      {all.map((operation, index) => (
        <li key={index} className={attributClass(operation, index)}>
          {operation.text}
          {operation.success ? operation.response : "?"}
        </li>
      ))}
    </ul>
  );
}

export default LeftPanelOperations;
