import React from "react";
import { render } from "@testing-library/react";
import InfoGameStart from "../components/InfoGameStart";

describe("Mount InfoGameStart", () => {
  test("Info game start show text", () => {
    const { getByText } = render(<InfoGameStart />);
    const titleElement = getByText(/[Are you ready???]/i);
    expect(titleElement).toBeInTheDocument();
  });
});
