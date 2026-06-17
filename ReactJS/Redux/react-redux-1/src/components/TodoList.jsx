import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeTodo, updateTodo } from "../redux/todoActions";


export default function TodoList() {
    const todos = useSelector((state) => state.todos);

    return (
        <>
            <h3>Todo List</h3>
            {todos.length == 0 && <p>Add todo to begin!</p>}
            <ul >
                {todos.map((todo) => <TodoDisplay key={todo.id} todo={todo} />)}
            </ul>
        </>
    )
}

function TodoDisplay({ todo }) {
    const [isUpdate, setIsUpdate] = useState(false);
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    function handleUpdate(id) {
        dispatch(updateTodo({ id, title: input.trim() }));
        setInput("");
        setIsUpdate(false);
    }

    return (
        <li className="text-left" key={todo.id}>
            {/* <div className="flex gap-3 p-1"> */}
            <p className="inline mr-1">{todo.title}</p>
            <button className="bg-lightcoral" onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
            {!isUpdate && <button className="bg-lightyellow" onClick={() => setIsUpdate(!isUpdate)} >update</button>}
            {isUpdate && <>
                <input type="text" placeholder="enter text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="bg-lightslategray" onClick={() => handleUpdate(todo.id)} >submit</button>
            </>}
            {/* </div> */}
        </li>
    )
}