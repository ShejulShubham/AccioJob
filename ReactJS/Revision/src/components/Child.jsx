import { useEffect, useState } from "react";

export default function Child(){
    const [timer, setTimer] = useState(0);
    const [startTimer, setStartTimer] = useState(false);

    useEffect(()=>{
        let id = null;
        if(startTimer){
            id = setInterval(()=>{
                setTimer(prev=>prev+1)
            }, 1000)      
        }

        return ()=>{
            clearInterval(id);
        }
    }, [startTimer])


    return (
        <>
            <h1>Hey, Do You Enjoy Running?</h1>
            {startTimer && <h2>Timer: {timer}s</h2>}
            <button onClick={()=>{setStartTimer(prev=>!prev)}} >Start Time</button>
        </>
    )
}