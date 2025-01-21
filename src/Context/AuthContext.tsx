import { createContext, useState } from 'react'
import React from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({children}) {
    const [user, SetUser] = useState({
        nome:'Vinicius'
    })
  return (
   <AuthContext.Provider value={{user}}>
    {children}
   </AuthContext.Provider>
  )
}