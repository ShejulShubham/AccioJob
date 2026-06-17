import { useSelector } from "react-redux";

export default function CounterDisplay() {

    const count = useSelector((state) => state.count.count);

    return (
        <>
            <h3>Counter: <span className="color-cadetblue">{count}</span></h3>
        </>
    )
}