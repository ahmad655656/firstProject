import { createContext, useState } from "react";

export const TypeContext = createContext('')
export const TypeProvider = ({children}) =>{
    const [TypeName, setTypeName] = useState('');
    return (
        <TypeContext.Provider value={{TypeName, setTypeName}}>
           {children}
        </TypeContext.Provider>
    )
}