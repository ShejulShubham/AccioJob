import {useState} from "react"

export default function ScoreBoard(){
    let [scoreA, setScoreA] = useState(0);
    let [scoreB, setScoreB] = useState(0);



    return (
        <>
        <h2>Team A Score: {scoreA}</h2>
        <h2>Team B Score: {scoreB}</h2>

        <button onClick={()=>setScoreA(prev=>prev+1)}>+1 Team A</button>
        <button onClick={()=>setScoreB(prev=>prev+1)}>+1 Team B</button>
        <button onClick={()=>{setScoreA(0), setScoreB(0)}}>Reset Both</button>
        </>
    )
}