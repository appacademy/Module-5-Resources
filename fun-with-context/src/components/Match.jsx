import { useState, useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

export default function Match() {
  const [show, setShow] = useState(false);
  const { sign } = useContext(HoroscopeContext)
  return (
    <div>
      <button onClick={() => { setShow(!show) }}>{show ? "hide" : "reveal"}</button>
      {show && (
        <h4>{sign.match}</h4>
      )}
    </div>
  )
}