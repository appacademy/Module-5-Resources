import { useState, useEffect }from 'react'


export default function TestComponent() {

    const [info, setInfo] = useState({})


    useEffect( () => {
        setInfo({users: [{name: "Blue"},{name: "Patch"}, {name: "Mimi"}]})
    }, [])

    if (!info.users) return null

    return(
        <div>
            <h1>{info.users[1].name}</h1>
            { info.user && info.users.map( (user) => (
                <UserInfoCard user={user} key={ user.id } />
            ))}
        </div>
    )
}