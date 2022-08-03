import { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer"

const AppContext = createContext();
const initialState = {
    name : "",
    image : ""
};


const AppProvider = ({children})=> {

    const[state , dispatch] = useReducer(reducer , initialState);
    

    const updateHomePage=() => {
        return dispatch(
            {
                type : "HOME_UPDATE",
                payload : {
                    name : "Vivek Modi",
                    image : "./images/hero_banner.svg"
                }
            }
        );
    }

    const updateAboutPage=() => {
        return dispatch(
            {
                type : "ABOUT_UPDATE",
                payload : {
                    name : "Vivek Girish Modi",
                    image : "./images/pic.png"
                }
            }
        );
    }
    return (
        <AppContext.Provider value={{...state , updateHomePage , updateAboutPage}}>
            {children}
        </AppContext.Provider>
    )
}


// global custom hooks 
const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext , AppProvider , useGlobalContext}