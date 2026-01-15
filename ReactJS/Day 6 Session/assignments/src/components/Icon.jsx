export default function Icon({title, icon}){

    return (
        <>
        <h2>{title}</h2>
        {!icon && "No Icon provided!"}
        {icon}
        </>
    )
}