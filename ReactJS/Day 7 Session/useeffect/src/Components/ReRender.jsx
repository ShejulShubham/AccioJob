import { useEffect, useState } from "react";


export default function ReRender(){

    const [render, setRender] = useState(0);

    useEffect(()=>{
        console.log("Rendered!");
    })

    return (
        <>
        <h1>Assignment 1</h1>
        <button onClick={()=>setRender(prev => prev+1)}>render</button>
        </>
    )
}