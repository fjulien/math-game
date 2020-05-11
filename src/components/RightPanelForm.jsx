import React, { useState, createRef } from "react";
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
  const textInput = createRef();
  const operations = useSelector(operationsState);
  const firstResponse = useSelector(getFirstResponse);
  const dispatch = useDispatch();

  function response(event) {
    event.preventDefault();
    textInput.current.focus();
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
        type="number"
        step="1"
        min="0"
        max="81"
        name="response"
        autoFocus
        autoComplete="off"
        ref={textInput}
        onChange={checkResultUser}
        value={result}
      />
      <label>
        <input type="submit" value="Validé" />
      </label>
      <p>ou appuyer sur ENTRER</p>
      <div>{`Temps: ${useSelector(timeState)}s | Score: ${
        operations.score
      }`}</div>
    </form>
  );
}

export default RightPanelForm;
