import { Model } from "react-axiom";
import { makeRandomNumber, multiply } from "math-game-function";

export class Operations extends Model {
  all = [];
  time = 0;
  score = 0;
  endGame = false;

  getAll() {
    return this.all;
  }
  getLastAll() {
    if (this.isEmpty()) return undefined;
    return this.getAll()[this.getAll().length - 1];
  }
  getLastResponse() {
    if (this.isEmpty()) return undefined;
    if (this.getAll()[this.getAll().length - 1].response) return undefined;
    return this.getAll()[this.getAll().length - 1].response;
  }
  isEndGame() {
    return this.endGame;
  }
  getScore() {
    return this.score;
  }
  getTime() {
    return this.time;
  }
  setTime(time) {
    this.time = time;
  }
  isEmpty() {
    return this.all.length === 0;
  }
  start() {
    this.addOperation();
    this.startTimer();
  }
  startTimer(callback) {
    this.setTime(0);
    this.interval = setInterval(() => {
      this.setTime(this.time++);
      callback && callback(); // jest test
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.interval);
  }
  end() {
    this.stopTimer();
    this.endGame = true;
  }
  addScore() {
    this.score++;
  }
  addOperation() {
    if (!this.isEndGame()) this.all.push(new Operation());
  }
  responseClient(response) {
    if (response === this.getLastResponse() && !this.isEndGame()) {
      this.addScore();
      this.addOperation();
    } else {
      this.end();
    }
  }
}

export class Operation {
  nb1;
  nb2;
  response;
  text;
  constructor() {
    const nb1 = makeRandomNumber();
    const nb2 = makeRandomNumber();
    this.nb1 = nb1;
    this.nb2 = nb2;
    this.response = multiply(nb1, nb2);
    this.text = `${nb1} x ${nb2} = `;
  }
}
