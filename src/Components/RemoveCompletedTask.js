export default function RemoveCompletedTodo({todoList, removeCompletedTodo}) {
    return (
        <>
            {todoList.length > 0 && <button data-testid='remove-completed' className="remove-completed" onClick={removeCompletedTodo}> Remove Completed </button>}
        </>
    );
}