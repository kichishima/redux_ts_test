import Link from "next/link"
// import {store} from '../src/store'
import { RootState } from '../src/store'
import { decrement, increment } from '../src/slices'
import { useSelector, useDispatch } from 'react-redux'
// import { Provider } from 'react-redux'

function Home(){
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
                <p>Home</p>
                <button aria-label="Increment value" onClick={()=>dispatch(increment())}>incre</button>
                <button aria-label="Decrement value" onClick={()=>dispatch(decrement())}>decre</button>
                <p>{count}</p>
                <Link href="./test">test</Link>
        </div>
    )
}

export default Home