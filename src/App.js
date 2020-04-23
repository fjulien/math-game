import React from "react";
import "./App.scss";
import LeftPanelOperations from "./components/LeftPanelOperations";
import RightPanelForm from "./components/RightPanelForm";
import StartGame from "./components/StartGame";
import { useSelector } from "react-redux";
import InfoGameStart from "./components/InfoGameStart";
import { operationsState } from "./store/operations/operations";

function App() {
  const operations = useSelector(operationsState);
  return (
    <div className="App">
      <h1>Math game</h1>
      <a data-testid="link-me" href="https://github.com/fjulien">
        <i>By me</i>
      </a>
      <div className="container">
        <article>
          {operations.isEmpty ? <InfoGameStart /> : <LeftPanelOperations />}
        </article>
        <div className="separation"></div>
        <article>
          {operations.isEmpty ? <StartGame /> : <RightPanelForm />}
        </article>
      </div>
    </div>
  );
}

export default App;
