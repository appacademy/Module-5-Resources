import { useState, useEffect } from 'react'


export default function TestComponent2() {
    const [test1, setTest1] = useState(true)
    console.log(test1)    //  R1  T  R2 T  R3 F
    const [test2, setTest2] = useState(false)
    console.log(test2)   //  R1 F  R2 T R3 T


    useEffect(() =>{
        if(test2){
            setTest1(!test1)
        }
    }, [test2])

    useEffect(() =>{
        if(test1){
            setTest2(!test2)
        }
    }, [test1])

    return (
        <h2>{ test1} : {test2}</h2>
    )
}