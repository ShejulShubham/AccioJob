import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addTodo, updateGivenTodo } from "./todoSlice";

export default function TodoForm({ updateTodo }) {
    const [input, setInput] = useState(updateTodo?.task || "");
    const dispatch = useDispatch();

   useEffect(()=>{
    if(updateTodo){
        setInput(updateTodo.task);
    }
   }, [updateTodo])

    function handleSubmit(e) {
        e.preventDefault();

        if (!input || input.length == 0) return;

        if (updateTodo) {
            dispatch(updateGivenTodo({ id: updateTodo.id, task: input }));
        } else {
            dispatch(addTodo(input.trim()));
        }

        setInput("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <h3>{updateTodo ? "Update" : "Add"} TODO</h3>
                <input className="mr-1" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" >{updateTodo ? "Update" : "Submit"}</button>
            </form>

        </>
    )
}