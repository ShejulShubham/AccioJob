import { useUserContext } from "../context/UserContext"

export default function Header(){
    const { toggleTheme } = useUserContext()

    return (
        <header style={{float: "right"}}>
            <nav>
                <button style={{padding: "10px 20px"}} onClick={toggleTheme} >Toggle Theme</button>
            </nav>
        </header>
    )
}