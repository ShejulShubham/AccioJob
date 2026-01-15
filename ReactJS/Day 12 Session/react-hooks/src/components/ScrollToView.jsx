import { useRef } from "react";


export default function ScrollToView(){
    const targetSection = useRef(null);
    // let targetSection = null;

    function scrollToView(){
        targetSection.current.scrollIntoView();
        // targetSection.scrollIntoView();
        console.log(targetSection);
    }

    return (
        <>
        <h1>Scroll To View</h1>
            <button onClick={scrollToView}>Scroll to Section</button>
            <div style={{height: "1000px"}} ></div>
            <div ref={targetSection} style={{height:"100px", background: "lightgreen"}}>Target Section</div>
        </>
    )
}