import {useState} from 'react'

export default function RandomNumber(){
    let [numberList, setNumberList] = useState([]);

    function generateNumber(){
        const number = Math.floor(Math.random() * 100) + 1;
        setNumberList((prev)=>{
            return [...prev, number];
        })
    }

    return (
        <>
        <h2>Assignment 13</h2>

        <button onClick={generateNumber} >Add Random Number</button>
        
        <ul>
            {numberList.map((num, index)=>{
                return <li key={index} >{num}</li>
            })}
        </ul>
        </>
    )
}