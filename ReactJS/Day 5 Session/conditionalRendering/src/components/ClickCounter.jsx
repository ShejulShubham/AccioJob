import { useState } from "react";

export default function ClickCounter(){
    let [count, setCount] = useState(0);

    return (
        <>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)} >increase count</button>
        </>
    )
}