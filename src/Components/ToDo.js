export default function ToDo({todoList, completedTodo}){
    return (
        <div>
                {todoList.map((todos) => {
                    return(
                        <li data-testid='todolist' key={todos.id}>
                            {todos.isDone ? <s>{todos.task}</s> : <b>{todos.task}</b>}
                            <button data-testid="done" onClick={() => completedTodo(todos.id)}>√</button>
                        </li>
                    )
                })}
        </div>
      );
}

