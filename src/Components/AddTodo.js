export default function AddTodo({value, handleChange, addTask}) {
    return (
        <div>
            <input type="text" name= '' placeholder="Enter Your Task" value={value} onChange={(e) => handleChange(e.target.value)} />&nbsp;&nbsp;&nbsp;
            <button className='add-task' data-testid='addtask-button' type="submit" onClick={addTask} >ADD</button>
        </div>
    );
}