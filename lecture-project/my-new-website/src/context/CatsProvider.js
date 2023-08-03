import { createContext, useContext } from 'react'

export const CatsContext = createContext()

export const useCats = () => useContext(CatsContext)

export default function CatsProvider(props){
  return (
    <CatsContext.Provider value={{ val: "cats context" }}>
      {props.children}
    </CatsContext.Provider>
  )
}