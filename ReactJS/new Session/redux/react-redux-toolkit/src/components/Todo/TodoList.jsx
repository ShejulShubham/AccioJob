import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./todoSlice";

export default function TodoList({ handleUpdate }) {

    const todos = useSelector(state => state.todo);



    return (
        <>
            <h3>Todo List</h3>
            {todos.length == 0 && <p>Nothing to show for!</p>}
            <ul >
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} />
                ))}

            </ul>
        </>
    )
}

function Todo({ todo, handleUpdate }) {

    const dispatch = useDispatch();

    function handler() {
        removeTodo(todo.id);
        handleUpdate(todo);
    }

return (
    <li className="flex gap-2">
        <p>{todo.task}</p>
        <button className="bg-lightyellow" onClick={handler}>Update</button>
        <button className="bg-lightcoral" onClick={() => dispatch(removeTodo(todo.id))} >Remove</button>
    </li>
)
}