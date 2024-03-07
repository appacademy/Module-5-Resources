import { createContext, useState, useContext } from 'react'


const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)


export default function ThemeProvider({children}) {
    const [ theme, setTheme] = useState("dark")

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}