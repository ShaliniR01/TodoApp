import { useState } from "react";
import Header from "./Components/Header";
import NoToDo from "./Components/NoToDo";
import ToDo from "./Components/ToDo";
import "./styles.css";

export default function App() {

  const [todoList, setTodoList] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);

  return (
    <div className="Application">
      <Header />
      <div data-testid='todo'>{todoList.length > 0 ? <ToDo todoList={todoList} /> : <NoToDo/>}</div>
      {todoList.length > 0 ? <button data-testid='empty' onClick={() => setTodoList([])}> Empty </button> : null}
    </div>
  );
}
