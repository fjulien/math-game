import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Score from "./Score";
import "./StartGame.scss";
import { fetchUsers, userState } from "../stores/user";
import { useSelector } from "react-redux";


function StartGame() {
  const dispatch = useDispatch();
  const [pseudo, setPseudo] = useState("");
  const user = useSelector(userState);

  function launchGame(event) {
    event.preventDefault();
    dispatch(fetchUsers(pseudo));
    console.log(user)
  }

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
        <input
          name="start"
          type="submit"
          value="Démarrer"
          disabled={pseudo.trim().length === 0}
        />
      </label>
      <Score />
    </form>
  );
}

export default StartGame;
