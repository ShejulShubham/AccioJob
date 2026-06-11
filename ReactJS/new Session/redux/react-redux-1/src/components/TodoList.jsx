import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../redux/todoActions";


export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    return (
        <>
            <h3>Todo List</h3>
            {todos.length == 0 && <p>Add todo to begin!</p>}
            <ul >
                {todos.map((todo) => (
                    <li className="text-left" key={todo.id}>
                        {/* <div className="flex gap-3 p-1"> */}
                        <p className="inline mr-1">{todo.title}</p>
                        <button className="bg-lightcoral" onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
                        {/* </div> */}
                    </li>
                ))}
            </ul>
        </>
    )
}