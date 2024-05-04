import React from "react";
import { screen, render } from "@testing-library/react";
import App from "../App";

it('should display Header ', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    expect(header).toHaveTextContent('To-Do App');
});

it('should display Todo ', () => {
    render(<App />);
    const notodo = screen.getByTestId('notodo');
    expect(notodo).toHaveTextContent('“Nothing to do buddy. Sleep!!”');
});