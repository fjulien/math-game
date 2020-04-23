import { Operations, Operation } from "../store/operations/Operations";

describe("Random number", () => {
  const operations = new Operations();
  test("Start operation", () => {
    operations.start();
    expect(operations.getAll().length).toBe(1);
    expect(operations.getScore()).toBe(0);
    expect(operations.getTime()).toBe(0);
    expect(operations.isEndGame()).toBeFalsy();
  });
  test("Have operation", () => {
    expect(operations.getLastAll() instanceof Operation).toBeTruthy();
  });
  test("Response client operation is true", () => {
    operations.responseClient(operations.getLastResponse());
    expect(operations.getScore()).toBe(1);
    expect(operations.getAll().length).toBe(2);
    expect(operations.isEndGame()).toBeFalsy();
  });
  test("Response client operation is true x 2", () => {
    operations.responseClient(operations.getLastResponse());
    expect(operations.getScore()).toBe(2);
    expect(operations.getAll().length).toBe(3);
    expect(operations.isEndGame()).toBeFalsy();
  });
  test("Response client operation is false", () => {
    operations.responseClient(operations.getLastResponse() - 1);
    expect(operations.getScore()).toBe(2);
    expect(operations.getAll().length).toBe(3);
    expect(operations.isEndGame()).toBeTruthy();
  });
  test("Response client operation is true but the game is finish", () => {
    operations.responseClient(operations.getLastAll().response);
    expect(operations.getScore()).toBe(2);
    expect(operations.getAll().length).toBe(3);
    expect(operations.isEndGame()).toBeTruthy();

  });
  test("Timer", () => {
    jest.useFakeTimers();
    const operationTestTime = new Operations();
    const callback = jest.fn();
    operationTestTime.startTimer(callback);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(5000);
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(5);
  });
});
