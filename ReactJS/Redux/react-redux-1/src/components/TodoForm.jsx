import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoActions";


export default function TodoForm() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        setInput("");
        dispatch(addTodo(input.trim()));
    }

    return (
        <>
            <h3>Add Todo</h3>
            <form className="flex gap-2 center" onSubmit={handleSubmit}>
                <input type="text" placeholder="enter todo" value={input} onChange={(e) => { setInput(e.target.value) }} />
                <button className="bg-lightblue" type="submit" >Add todo</button>
            </form>
        </>
    )
}