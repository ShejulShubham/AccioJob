import {useState} from 'react';

export default function FontSizeSlider(){
    let [size, setSize] = useState(10);


    return (
        <>
        <h2>Assignment 12</h2>
        <p style={{fontSize:size}}>Live Preview Text (size: {size}px)</p>
        <input type="range" min={10} max={48} value={size} onChange={(e)=>setSize(Number(e.target.value))}/>
        </>
    )
}