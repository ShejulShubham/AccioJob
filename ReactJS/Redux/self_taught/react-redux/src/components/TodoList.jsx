import {} from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../store/todoStore";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);

  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Redux Todo List</h2>
        {list.length !== 0 ? (
          <div style={{ display: "flex" }}>
            {list.map((li) => (
              <div key={li.id} style={{ border: "1px solid black", padding: "10px", borderRadius: "30px" }}>
                <p>id: {li.id}</p>
                <p>text: {li.text}</p>
                <p>completed: {li.completed ? "yes" : "no"}</p>
                <button style={{padding: "10px", borderRadius: "20px", background: "green"}} onClick={()=>dispatch(toggleTodo(li.id))} >Set as completed</button>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Nothing to show!</p>
        )}
      </div>
    </>
  );
}
