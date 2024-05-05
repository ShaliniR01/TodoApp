import CompletedTodo from "./CompletedTodo";
import DeleteTodo from "./DeleteTodo";

export default function ToDo({todoList, completedTodo, removeTodoTask}){
    return (
        <div>
            <ul>
                {todoList.map((todos) => {
                    return(
                        <li className="todo" key={todos.id} data-testid='todolist' >
                            <div className="task-container">
                                <div className="task">
                                    {todos.isDone ? <s>{todos.task}</s> : <b>{todos.task}</b>}
                                </div>
                                <div className='buttons-container'>
                                    <CompletedTodo completedTodo={completedTodo} todos={todos} />
                                    <DeleteTodo removeTodoTask={removeTodoTask} todos={todos} />
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
      );
}

