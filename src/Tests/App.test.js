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

it('should display correct number of TodoList ', () => {
    render(<App />);
    const done = screen.getAllByTestId('done');
    const remove = screen.getByTestId('remove');
    fireEvent.click(done[0]);
    fireEvent.click(remove);
    const todo = screen.getAllByTestId('todolist');
    expect(todo.length).toBe(4);
});

it('should display correct TodoList ', () => {
    render(<App />);
    const done = screen.getAllByTestId('done');
    const remove = screen.getByTestId('remove');
    fireEvent.click(done[1]);
    fireEvent.click(remove);
    const todo = screen.getAllByTestId('todolist');
    expect(todo.length).toBe(4);
    expect(todo[0]).toHaveTextContent('Read SpringBoot');
    expect(todo[1]).toHaveTextContent('Prepare breakfast');
});

it('should not display todolist after marking all as completed and removing it ', () => {
    render(<App />);
    const done = screen.getAllByTestId('done');
    const remove = screen.getByTestId('remove');
    fireEvent.click(done[0]);
    fireEvent.click(done[1]);
    fireEvent.click(done[2]);
    fireEvent.click(done[3]);
    fireEvent.click(done[4]);
    fireEvent.click(remove);
    const todo = screen.getByTestId('todo');
    expect(todo).toHaveTextContent('“Nothing to do buddy. Sleep!!”');
});