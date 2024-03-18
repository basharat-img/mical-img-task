import { createContext, useState } from "react";
import { useContext } from "react";
const MyContext = createContext()

export const useMyContext = () => {
    return useContext(MyContext)
}
export const MyContextProvider = ({ children }) => {

    

const [loading,setLoading] =  useState(true)
const [activeItem, setActiveItem] = useState("Home")



   
    return (
        <MyContext.Provider value={{loading ,setLoading,activeItem,setActiveItem }} >
            {children}
        </MyContext.Provider>
    )
}



