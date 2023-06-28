import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionCreateSpot, actionDeleteSpot, actionReadSpot } from "../../store/spots"

export default function ReduxStuff({ thing }){
  const dispatch = useDispatch()
  const thingSelected = useSelector(selectorFunction)

  function selectorFunction (store) {
    const thing = store.spots.message
    return thing
  }

  useEffect(() => {
    dispatch(actionReadSpot())
  }, [])

  return (
    <div>
      <h1>{thingSelected}</h1>
      <button onClick={() => {
        dispatch(actionDeleteSpot(thing.id))
      }}>delete thing</button>
    </div>
  )
}