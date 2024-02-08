import { useState, useContext} from 'react'
import { HoroscopeContext } from '../context/HoroscopeContext'

export default function Match() {
    const { sign } = useContext(HoroscopeContext)
    const [match, setMatch] = useState(false)

    return (
        <div>
            <button
            onClick={ () => setMatch(!match)}
            >
                { match ? "Hide Match" : "Reveal Match"}
            </button>
            { match && <div>{ sign.match }</div>}
        </div>
    )
}