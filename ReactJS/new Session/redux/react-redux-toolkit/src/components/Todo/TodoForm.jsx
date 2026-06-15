import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addTodo, updateGivenTodo } from "./todoSlice";

export default function TodoForm({ updateTodo, setUpdateTodo }) {
    const [input, setInput] = useState(updateTodo?.task || "");
    const dispatch = useDispatch();

    const isUpdate = !!updateTodo;

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
            setUpdateTodo("");
        } else {
            dispatch(addTodo(input.trim()));
        }

        setInput("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <h3>{isUpdate ? "Update" : "Add"} TODO</h3>
                <input className="mr-1" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" >{isUpdate ? "Update" : "Submit"}</button>
            </form>

        </>
    )
}