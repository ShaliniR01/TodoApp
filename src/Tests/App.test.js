import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";
window.alert = jest.fn();

describe('Basic rendering of TodoApp',()=>{
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

    it('should display Add task button ', () => {
        render(<App />);
        const addTaskButton = screen.getByTestId('addtask-button');
        expect(addTaskButton).toBeInTheDocument();
    });

    it('should display Remove Completed button ', () => {
        render(<App />);
        const addTaskInputField = screen.getByPlaceholderText('Enter Your Task');
        expect(addTaskInputField).toBeInTheDocument();
    });

    it('should display Remove Completed button ', () => {
        render(<App />);
        const removeCompletedTask = screen.getByTestId('remove-completed');
        expect(removeCompletedTask).toBeInTheDocument();
    });
})

describe('Testing mark as completed and remove completed task functionality',()=>{
    it('should display correct number of TodoList after marking the task as completed and removing it', () => {
        render(<App />);
        const doneTaskButton = screen.getAllByTestId('donetask-button');
        const removeCompletedTask = screen.getByTestId('remove-completed');
        fireEvent.click(doneTaskButton[0]);
        fireEvent.click(removeCompletedTask);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(4);
    });

    it('should display correct TodoList after marking the task as completed and removing it', () => {
        render(<App />);
        const doneTaskButton = screen.getAllByTestId('donetask-button');
        const removeCompletedTask = screen.getByTestId('remove-completed');
        fireEvent.click(doneTaskButton[1]);
        fireEvent.click(removeCompletedTask);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(4);
        expect(todo[0]).toHaveTextContent('Read SpringBoot');
        expect(todo[1]).toHaveTextContent('Prepare breakfast');
        expect(todo[2]).toHaveTextContent('Sleep for 2 hours');
        expect(todo[3]).toHaveTextContent('Take a shower');
    });

    it('should not display todolist after marking all as completed and removing it ', () => {
        render(<App />);
        const doneTaskButton = screen.getAllByTestId('donetask-button');
        const removeCompletedTask = screen.getByTestId('remove-completed');
        fireEvent.click(doneTaskButton[0]);
        fireEvent.click(doneTaskButton[1]);
        fireEvent.click(doneTaskButton[2]);
        fireEvent.click(doneTaskButton[3]);
        fireEvent.click(doneTaskButton[4]);
        fireEvent.click(removeCompletedTask);
        const todo = screen.getByTestId('todo');
        expect(todo).toHaveTextContent('“Nothing to do buddy. Sleep!!”');
    });

    it('should not remove tasks in the todolist when no taska are completed ', () => {
        render(<App />);
        const removeCompletedTask = screen.getByTestId('remove-completed');
        fireEvent.click(removeCompletedTask);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(5);
    });
})

describe('Testing delete task functionality',()=>{
    it('should be able to delete tasks ', () => {
        render(<App />);
        const deleteTaskButton= screen.getAllByTestId('deletetask-button');
        fireEvent.click(deleteTaskButton[0]);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(4);
        expect(todo[1]).toHaveTextContent('Prepare breakfast');
    });

    it('should display correct TodoList after deleting the task', () => {
        render(<App />);
        const deleteTaskButton= screen.getAllByTestId('deletetask-button');
        fireEvent.click(deleteTaskButton[2]);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(4);
        expect(todo[0]).toHaveTextContent('Read SpringBoot');
        expect(todo[1]).toHaveTextContent('Complete assignments');
        expect(todo[2]).toHaveTextContent('Sleep for 2 hours');
        expect(todo[3]).toHaveTextContent('Take a shower');
    });
})

describe('Testing add task functionality',()=>{
    it('should not add tasks to todolist when the field is empty ', () => {
        render(<App />);
        const addTaskButton = screen.getByTestId('addtask-button');
        fireEvent.click(addTaskButton);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(5);
    });

    it('should set the add task in the input field', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Enter Your Task');
        const value = 'Read React';
        fireEvent.change(input, { target: { value } });
        expect(input).toHaveValue('Read React') ;
    });

    it('should add task to the todolist', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Enter Your Task');
        const value = 'Read React';
        fireEvent.change(input, { target: { value } });
        const addTaskButton = screen.getByTestId('addtask-button');
        fireEvent.click(addTaskButton);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(6);
    });

    it('should display the added task in the todolist', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Enter Your Task');
        const value = 'Read React';
        fireEvent.change(input, { target: { value } });
        const addTaskButton = screen.getByTestId('addtask-button');
        fireEvent.click(addTaskButton);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(6);
        expect(todo[5]).toHaveTextContent('Read React');
    });

    it('should not add tasks when the task is already in the todolist ', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Enter Your Task');
        const value = 'Read SpringBoot';
        fireEvent.change(input, { target: { value } });
        const addTaskButton = screen.getByTestId('addtask-button');
        fireEvent.click(addTaskButton);
        const todo = screen.getAllByTestId('todolist');
        expect(todo.length).toBe(5);
    });
})