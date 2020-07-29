import React from "react";
import "./App.scss";
import ListOfOperations from "./components/ListOfOperations";
import RightPanelForm from "./components/RightPanelForm";
import StartGame from "./components/StartGame";
import { useSelector } from "react-redux";
import InfoGameStart from "./components/InfoGameStart";
import { operationsState } from "./stores/operations";
import { isEndGame } from "./stores/timer";
import packageJson from "../package.json";

function App() {
  const operations = useSelector(operationsState);
  const isEnd = useSelector(isEndGame);

  return (
    <div className="App">
      <h1>Brain challenge</h1>
      <a data-testid="link-me" href={packageJson.author.url}>
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
    </div>
  );
}

export default App;
