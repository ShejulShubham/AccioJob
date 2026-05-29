import { useState, useEffect } from "react";

function TodoForm({createTodo}){

    const [title, setTitle] = useState("");
    const [creating, setCreating] = useState(false);

    function handleCreateTodo(event){
        event.preventDefault();
        try {
            setCreating(true);
            createTodo(title);
        }catch(error){
            console.log("ERROR: ",error);
        }finally {
            setCreating(false);
        }
        
    }

    return (
        <div className="todo-form">
            <h1>TODO FORM</h1>
            <form className="form" onSubmit={handleCreateTodo}>
                <label >
                    Title
                    <input type="text"
                    name="title"
                    id="title"
                    placeholder="Add a new task..."
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </label>
                    <button type="submit" disabled={creating}>
                        {creating ? "Adding..." : "Add"}
                    </button>
            </form>
        </div>
    )
}

export default TodoForm;