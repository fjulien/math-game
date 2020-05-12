import React, { useState } from "react";
import { start } from "../stores/operations";
import { decremente, initInternval, initTime } from "../stores/timer";
import { useDispatch } from "react-redux";
import Score from "./Score";
import "./StartGame.scss";

function StartGame() {
  const dispatch = useDispatch();

  function launchGame(event) {
    event.preventDefault();
    dispatch(start(pseudo));
    dispatch(initTime());
    dispatch(initInternval(setInterval(() => dispatch(decremente()), 1000)));
  }

  const [pseudo, setPseudo] = useState("");

  return (
    <form className="StartGame" onSubmit={(event) => launchGame(event)}>
      <label htmlFor="pseudo">
        <input
          type="text"
          onChange={(event) => setPseudo(event.target.value)}
          value={pseudo}
          name="pseudo"
          maxLength="30"
          required
        />
      </label>
      <label htmlFor="start">
        <input name="start" type="submit" value="Démarrer" />
      </label>
      <Score />
    </form>
  );
}

export default StartGame;
