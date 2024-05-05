export default function CompletedTodo({completedTodo, todos}) {
    return (
        <>
            <button data-testid="donetask-button" className="done-button" onClick={() => completedTodo(todos.id)}><i className="fa fa-check"></i></button>
        </>
    );
}