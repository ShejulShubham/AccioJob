import {useState, useEffect} from "react"

export default function PreventUseEffect(){
    const [text, setText] = useState("");

    useEffect(()=>{
        if(text.trim() === "") return;
        
        console.log(text);
    })

    return (
        <>
        <h1>Assignment 7</h1>
        <input 
            type="text"
            placeholder="search..."
            value={text}
            onChange={(e)=>setText(e.target.value)}
        />
        </>
    )
}