import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";

it('should display Header ', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    expect(header).toHaveTextContent('To-Do App');
});

it('should display Todo ', () => {
    render(<App />);
    const todo = screen.getByTestId('todo');
    expect(todo).toBeInTheDocument();
});

it('should display TodoList ', () => {
    render(<App />);
    const todo = screen.getAllByTestId('todolist');
    expect(todo[0]).toHaveTextContent('Read SpringBoot');
    expect(todo[1]).toHaveTextContent('Complete assignments');
    expect(todo[2]).toHaveTextContent('Prepare breakfast');
    expect(todo[3]).toHaveTextContent('Sleep for 2 hours');
    expect(todo[4]).toHaveTextContent('Take a shower');
});

it('should display TodoList ', () => {
    render(<App />);
    const emptyButton = screen.getByTestId('empty');
    fireEvent.click(emptyButton);
    const todo = screen.getByTestId('todo');
    expect(todo).toHaveTextContent(['“Nothing to do buddy. Sleep!!”']);
});