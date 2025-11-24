export default function UserRole({name, role}){

    return (
        <h3>{name} {role === "admin" ? ("(admin access)") : ("(user access)")}</h3>
    )
}