import { createContext, useContext, useState } from "react";

export const HeaderContext = createContext()

export function HeaderContextProvider({children}){

    const [currentMenu, setCurrentMenu] = useState("homeSection")

    return(
        <HeaderContext.Provider value={{
            currentMenu,
            setCurrentMenu
            }}>
            {children}
        </HeaderContext.Provider>
    )
}

export function useHeaderContext(){
    return useContext(HeaderContext)
}