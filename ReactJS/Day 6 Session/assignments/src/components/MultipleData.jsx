export default function MultipleData({name, age, isOnline}){

    return(
        <>
        <p>Name: {name}</p>
        <p>age: {age}</p>
        <p>isOnline: {isOnline ? "🟢 online" : "🔴 offline"}</p>
        
        </>
    )
}