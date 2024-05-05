export default function DeleteTodo({removeTodoTask, todos}) {
    return (
        <>
            <button data-testid="deletetask-button" className="delete-button" onClick={() => removeTodoTask(todos.id)}><i className="fa fa-trash"></i></button>
        </>
    );
}