import Link from "next/link"
import { RootState } from '../src/store'
import { useSelector, useDispatch } from 'react-redux'


function Test(){
    const count = useSelector((state: RootState) => state.counter.value)

    return (
        <>
            <p>Test</p>
            <p>{count}</p>
            <Link href="./home">Link</Link>
        </>
    )
}

export default Test