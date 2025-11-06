import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    // const [userInfo, setUserInfo] = useState(null)

    const [isInitialized, setIsInitialized] = useState(true)
    const [auth, setAuth] = useState({})

    useEffect(()=>{
        const xdata = localStorage.getItem('auth')
        if (xdata) {
            setAuth(JSON.parse(xdata))
            setIsInitialized(false)
        } else {
            setIsInitialized(false)
        }
    }, [])
        
  return (
    <AuthContext.Provider value={ {auth, setAuth, isInitialized} }>
        { children }
    </AuthContext.Provider>
  )
}