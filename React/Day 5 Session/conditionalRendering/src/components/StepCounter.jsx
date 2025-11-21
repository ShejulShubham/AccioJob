import {useState} from "react"


export default function StepCounter(){
    let [count, setCounter] = useState(0);
    let [input, setInput] = useState(0);

    function handleInput(prev){
        const value = Number(input);

        if(value < 0){
            alert("please input step value!");
        }

        setCounter(prev =>prev + value);
    }

    return (
        <>
        <h3>Step: {count}</h3>
        <input type="number" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleInput}>Increase by Step</button>
        </>
    )
}