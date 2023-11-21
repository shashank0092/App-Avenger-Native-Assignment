import {createContext,useContext,useState} from "react"

const GlobalContext=createContext(null)

export const GlobalProvider=(props)=>{
    const[filter,setFilter]=useState(false)
    const[event,setEvent]=useState(false)
    return(
        <GlobalContext.Provider value={{filter,setFilter,event,setEvent}}  >
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext)