import {useState} from 'react';

export default function ThemeToggle(){
    let [dark, setDark] = useState(false);

    const styles = {
        minHeight: "100vh",
        background:dark?"#1111":"#ffff",
        color:dark?"#f5f5f5":"#1111",
        padding:"100px"
    }


    return (
        <>
        <div style={styles} >
            <h2>Assignment 9</h2>
            <button>Toggle Theme</button>
        </div>
        </>
    )
}