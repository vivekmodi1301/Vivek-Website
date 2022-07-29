// create a context (warehouse)
// provider 
// consumer 

import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children})=> {
    return (
        <AppContext.Provider value={{fname:"Vivek Modi" , age:"19" }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext , AppProvider}