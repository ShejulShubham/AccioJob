export default function Wrapper({onClick, children}){

    return (
        <button onClick={onClick} >
            {children}
        </button>
    )
}