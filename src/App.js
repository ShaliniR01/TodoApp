import { useState } from "react";
import React from "react";
import Header from "./Components/Header";
import NoToDo from "./Components/NoToDo";
import ToDo from "./Components/ToDo";
import "./styles.css";
import AddTodo from "./Components/AddTodo";
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [todoList, setTodoList] = useState([{id: 1, task: "Read SpringBoot", isDone: false},
                                            {id: 2, task: "Complete assignments", isDone: false},
                                            {id: 3, task: "Prepare breakfast", isDone: false},
                                            {id: 4, task: "Sleep for 2 hours", isDone: false},
                                            {id: 5, task: "Take a shower", isDone: false}]);

  const [addNewTodo, setAddNewTodo] = useState('');

  function completedTodo(id){
    const updatedTodoList = todoList.map(todo => {
      if(todo.id===id)
        todo.isDone = !todo.isDone;
         return todo;
      })
      setTodoList(updatedTodoList);
  }

  function removeCompletedTodo(){
      const updatedTodoList = todoList.filter(todo => !todo.isDone)
      if(updatedTodoList.length===todoList.length)
        window.alert('No tasks are completed !!!');
      setTodoList(updatedTodoList);
  }

  function addTodoTask(){
    if(addNewTodo===''){
      window.alert('Enter your task. The task field is empty !!!');
      return null;
    }
    const newTodo = {};
    newTodo.id = uuidv4();
    newTodo.task = addNewTodo;
    newTodo.isDone = false;
    setTodoList([...todoList, newTodo]);
    setAddNewTodo('');
  }

  function removeTodoTask(id){
    let indexOfDeletedTodo;
    for(let index=0;index<todoList.length;index++){
      if(id===todoList[index].id){
        console.log(todoList[index]);
        indexOfDeletedTodo=index;
      }
    }
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(indexOfDeletedTodo, 1);
    setTodoList(updatedTodoList);
  }

  function handleChange(task){
      setAddNewTodo(task);
  }

  return (
    <div className="Application">
      <Header/><hr/>
      <AddTodo value={addNewTodo} handleChange={handleChange} addTask={addTodoTask} />
      <div data-testid='todo'>{todoList.length > 0 ? <ToDo todoList={todoList} completedTodo={completedTodo} removeTodoTask={removeTodoTask}/> : <NoToDo/>}</div>
      {todoList.length > 0 ? <button data-testid='remove-completed' className="remove-completed" onClick={removeCompletedTodo}> Remove Completed </button> : null}
    </div>
  );

}
