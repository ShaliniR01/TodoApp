export default function AddTodo({newTodo, handleChange, addTodoTask}) {
    return (
        <div>
            <input type="text" name= '' placeholder="Enter Your Task" value={newTodo} onChange={(e) => handleChange(e.target.value)} />&nbsp;&nbsp;&nbsp;
            <button className='add-task' data-testid='addtask-button' type="submit" onClick={addTodoTask} >ADD</button>
        </div>
    );
}