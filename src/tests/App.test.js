import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe("App",  ()=> {
  test('Title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/Math game/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('link in my github', () => {
    const { getByTestId } = render(<App />);
    const linkElement = getByTestId("link-me");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://github.com/fjulien")
  });
})

