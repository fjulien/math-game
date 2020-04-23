import React, { useState } from "react";
import {
  getFirstResponse,
  addOperation,
  responseIsSuccess,
} from "../store/operations/operations";
import { useDispatch, useSelector } from "react-redux";
function RightPanelForm() {
  const dispatch = useDispatch();
  const firstResponse = useSelector(getFirstResponse);
  function response(event) {
    event.preventDefault();
    const resultNumber = parseInt(result);
    if (firstResponse === resultNumber) {
      dispatch(responseIsSuccess());
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
    <form onSubmit={response}>
      <input
        type="text"
        name="response"
        autoFocus
        autoComplete="off"
        onChange={checkResultUser}
        value={result}
      />
      <input type="submit" /> or press ENTER
    </form>
  );
}

export default RightPanelForm;
