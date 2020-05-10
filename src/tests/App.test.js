import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../stores/store";
import App from "../App";

function getComponentApp() {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
describe("Mount App", () => {
  test("Title", () => {
    const { getByText } = getComponentApp();
    const titleElement = getByText(/Math game/i);
    expect(titleElement).toBeInTheDocument();
  });
  test("link in my github", () => {
    const { getByTestId } = getComponentApp();
    const linkElement = getByTestId("link-me");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://github.com/fjulien");
  });
});
