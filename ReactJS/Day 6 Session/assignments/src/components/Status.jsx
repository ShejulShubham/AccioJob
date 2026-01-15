export default function Status({isOnline = false}){

    return (
        <A isOnline={isOnline}/>
    )
};


function A({isOnline}){

    return (<B isOnline={isOnline}/>)
}

function B({isOnline}){

    return (<C isOnline={isOnline}/>)
}

function C({isOnline}){

    return (<ShowStatus isOnline={isOnline}/>)
}

function ShowStatus({isOnline}){

    return (
        <p style={{color: isOnline ? "green":"crimson"}}>{isOnline ? "Online" : "Offline"}</p>
    )
}   