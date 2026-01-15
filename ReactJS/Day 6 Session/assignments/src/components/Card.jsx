export default function Card(prop){

    return <Level1 prop={prop} />
}


function Level1({prop}){

    
    return <Level2>{prop}</Level2>
}

function Level2({children}){
    
    return <p>{children.greet}</p>
}