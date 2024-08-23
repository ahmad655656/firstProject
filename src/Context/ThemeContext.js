import { createContext, useState } from "react";

export const ThemeContext = createContext('')
export const ThemeProvider = ({children}) =>{
    const [pr, setPr] = useState('');
    return (
        <ThemeContext.Provider value={{pr, setPr}}>
           {children}
        </ThemeContext.Provider>
    )
}