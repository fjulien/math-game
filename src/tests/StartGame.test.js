import React from "react";
import { render } from "@testing-library/react";
import StartGame from "../components/StartGame";

describe("StartGame", () => {
  test("Button start", () => {
    const { getByText } = render(<StartGame />);
    const titleElement = getByText(/Start/i);
    expect(titleElement).toBeInTheDocument();
  });
});
