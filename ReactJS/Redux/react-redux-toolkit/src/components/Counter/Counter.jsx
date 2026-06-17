import { increment, decrement, incrementBy, decrementBy } from './counterSlice';
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {

    const count = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <div className='center'>
            <h3 className='text-center' >Count: {count}</h3>
            <div className='flex center gap-2' >

                <button onClick={() => { dispatch(increment()) }} >Increment</button>
                <button onClick={() => { dispatch(decrement()) }} >Decrement</button>
                <button onClick={() => { dispatch(incrementBy(5)) }} >Increment by 5</button>
                <button onClick={() => { dispatch(decrementBy(5)) }} >Decrement by 5</button>

            </div>
        </div>
    )
}