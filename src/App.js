import { useState } from "react";
import Header from "./Components/Header";
import NoToDo from "./Components/NoToDo";
import ToDo from "./Components/ToDo";
import "./styles.css";

export default function App() {

  const [todoList, setTodoList] = useState([{id: 1, task: "Read SpringBoot", isDone: false},
                                            {id: 2, task: "Complete assignments", isDone: false},
                                            {id: 3, task: "Prepare breakfast", isDone: false},
                                            {id: 4, task: "Sleep for 2 hours", isDone: false},
                                            {id: 5, task: "Take a shower", isDone: false}]);

  function completedTodo(id){
    const updatedTodo = todoList.map(todo => {
      if(todo.id===id)
        todo.isDone = !todo.isDone;
         return todo;
      })
      setTodoList(updatedTodo);
  }

  function removeCompletedTodo(){
      const updatedTodo = todoList.filter(todo => !todo.isDone)
      if(updatedTodo.length==todoList.length)
        window.alert('No tasks are completed !!!');
      setTodoList(updatedTodo);
  }

  return (
    <div className="Application">
      <Header />
      <div data-testid='todo'>{todoList.length > 0 ? <ToDo todoList={todoList} completedTodo={completedTodo}/> : <NoToDo/>}</div>
      {todoList.length > 0 ? <button data-testid='remove' onClick={removeCompletedTodo}> Remove Completed </button> : null}
    </div>
  );
}
