import React from "react";
import { screen, render } from "@testing-library/react";
import App from "../App";
import ToDo from "../Components/ToDo";

it('should display Header ', () => {
    const todoList = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"];
    render(<ToDo todoList={todoList}/>);
    const todo = screen.getAllByTestId('todolist');
    expect(todo[0]).toHaveTextContent('Read SpringBoot');
    expect(todo[1]).toHaveTextContent('Complete assignments');
    expect(todo[2]).toHaveTextContent('Prepare breakfast');
    expect(todo[3]).toHaveTextContent('Sleep for 2 hours');
    expect(todo[4]).toHaveTextContent('Take a shower');
});


