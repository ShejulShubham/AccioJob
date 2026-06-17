import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./todoSlice";

export default function TodoList({ setUpdateTodo }) {

    const todos = useSelector(state => state.todo);


    return (
        <>
            <h3>Todo List</h3>
            {todos.length == 0 && <p>Nothing to show for!</p>}
            <ul >
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} setUpdateTodo={setUpdateTodo} />
                ))}

            </ul>
        </>
    )
}

function Todo({ todo, setUpdateTodo }) {

    const dispatch = useDispatch();

    function handler() {
        dispatch(removeTodo(todo.id));
        setUpdateTodo(todo);
    }

    return (
        <li>
            <p className="inline mr-1">{todo.task}</p>
            <button className="bg-lightyellow mr-1" onClick={handler}>Update</button>
            <button className="bg-lightcoral mr-1" onClick={() => dispatch(removeTodo(todo.id))} >Remove</button>
        </li>
    )
}