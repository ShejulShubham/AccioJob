export default function Object({user}){

    return (
        <div>
            <h3>Name: {user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}