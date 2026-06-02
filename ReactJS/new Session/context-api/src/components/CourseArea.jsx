import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function CourseArea(){
    const { name, role } = useContext(UserContext);

    return (
        <>
        <h2>CourseArea</h2>
        <p>Welcome, {name} to course and role is {role}</p>
        </>
    )
}