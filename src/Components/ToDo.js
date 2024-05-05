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
                                    <button data-testid="donetask-button" className="done-button" onClick={() => completedTodo(todos.id)}><i className="fa fa-check"></i></button>
                                    <button data-testid="deletetask-button" className="delete-button" onClick={() => removeTodoTask(todos.id)}><i className="fa fa-trash"></i></button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
      );
}

