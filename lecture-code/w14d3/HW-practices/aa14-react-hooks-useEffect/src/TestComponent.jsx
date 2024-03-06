import { useState, useEffect} from 'react'


export default function TestComponent() {
    const [info, setInfo] = useState({})



    useEffect( () => {
        setInfo({users:[{name: "Blue"},{name: "Patch"},{name: "Mimi"}]})
    }, [])


    !Object.values(info).length ? <Component/> : null
    
    const data = info.users.find(user => user.name === "Blue")


    return (
        <div>
            <h1>{ info && info.users.map(()=>)
        </div>
    )


}