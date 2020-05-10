import React, { useState } from "react";
import {
  getFirstResponse,
  addOperation,
  responseIsSuccess,
  responseIsFail,
} from "../stores/operations";
import { useDispatch, useSelector } from "react-redux";
import { timeState } from "../stores/timer";
import { operationsState } from "../stores/operations";
import "./RightPanelForm.scss";

function RightPanelForm() {
  const operations = useSelector(operationsState);
  const firstResponse = useSelector(getFirstResponse);
  const dispatch = useDispatch();
  function response(event) {
    event.preventDefault();
    const resultNumber = parseInt(result);
    if (firstResponse === resultNumber) {
      dispatch(responseIsSuccess());
    } else {
      dispatch(responseIsFail());
    }
    dispatch(addOperation());
    setresult("");
  }
  function checkResultUser(event) {
    let resultNumber = event.target.value;
    if (resultNumber >= 0 && resultNumber <= 81) setresult(resultNumber);
  }

  const [result, setresult] = useState("");

  return (
    <form className="RightPanelForm" onSubmit={response}>
      <input
        type="text"
        name="response"
        autoFocus
        autoComplete="off"
        onChange={checkResultUser}
        value={result}
      />
      <label>
        <input type="submit" value="Validé" />
        <p>ou appuyer sur ENTRER</p>
      </label>
      <div>{`Temps: ${useSelector(timeState)}s | Score: ${
        operations.score
      }`}</div>
    </form>
  );
}

export default RightPanelForm;
