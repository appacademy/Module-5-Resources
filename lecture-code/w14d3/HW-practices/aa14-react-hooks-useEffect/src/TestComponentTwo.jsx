import { useState, useEffect} from 'react'


export default function TestComponentTwo() {
    const [test1, setTest1 ] = useState(true)
    console.log(test1) /// r1 T r2 T r3 F
    const [test2, setTest2 ] = useState(false)
    console.log(test2) /// r1 F r2 T r3 T
    const test3 = 0

    useEffect(() => {
        if (test2){
            setTest1(!test1)
        }
    },[test2])

    useEffect(() => {
        if (test1){
            setTest2(!test2)
        }
    },[test1])


    return (
        <h1>{test1}, {test2}</h1>
    )
}