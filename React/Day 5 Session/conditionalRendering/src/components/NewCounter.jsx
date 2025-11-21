import {useState} from "react";

export default function NewCounter(){
    let [count, setCount] = useState(0);

    function handleIncrease(){
        setCount(prev=>prev + 1);
    }

    function handleDecrease(){
        setCount(prev=>{
            if(prev <= 0){
                return 0;
            }

            return prev-1;
        })
    }

    return (
        <>
        <h3>Counter: {count}</h3>
        <button onClick={handleIncrease} >Increase</button>
        <button onClick={handleDecrease} >Decrease</button>
        </>
    )
}