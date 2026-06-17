import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../redux/counterAction";

export default function CounterButtons() {

    const dispatch = useDispatch();

    return (
        <div className="flex center gap-1">
            <button className="bg-lightblue" onClick={() => dispatch(incrementCount())}>Increment</button>
            <button className="bg-lightcoral" onClick={() => dispatch(decrementCount())} >Decrement</button>
            <button className="bg-cadetblue" onClick={() => dispatch(incrementCount(5))} >Increment by 5</button>
        </div>
    )
}