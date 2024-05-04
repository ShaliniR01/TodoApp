export default function ToDo({todoList}){
    return (
        <div>
                {todoList.map((todos, index) => {
                    return(
                        <li data-testid='todolist' key={index}>
                            {todos}
                        </li>
                    )
                })}
        </div>
      );
}

