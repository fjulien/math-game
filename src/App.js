import React from "react";
import "./App.scss";
import ListOfOperations from "./components/ListOfOperations";
import RightPanelForm from "./components/RightPanelForm";
import StartGame from "./components/StartGame";
import { useSelector } from "react-redux";
import InfoGameStart from "./components/InfoGameStart";
import { operationsState } from "./stores/operations";
import { timeState, isEndGame } from "./stores/timer";

function App() {
  const operations = useSelector(operationsState);
  const isEnd = useSelector(isEndGame);

  return (
    <div className="App">
      <h1>Math game</h1>
      <a data-testid="link-me" href="https://github.com/fjulien">
        <i>By FJULIEN</i>
      </a>
      <div className="container">
        <article>
          {operations.isEmpty ? <InfoGameStart /> : <ListOfOperations />}
        </article>
        <div className="separation"></div>
        <article>
          {operations.isEmpty || isEnd ? <StartGame /> : <RightPanelForm />}
        </article>
      </div>
      <div>{`Temps: ${useSelector(timeState)}s | Score: ${
        operations.score
      }`}</div>
    </div>
  );
}

export default App;
