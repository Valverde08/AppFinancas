import { createContext, useState } from 'react'
import React from 'react'
import api from '../services/services'
import { useNavigation } from '@react-navigation/native'




export const AuthContext = createContext({})



export default function AuthProvider({children}) {
    const [user, SetUser] = useState(null)
    const [ loading, setLoading] = useState(false)

    const navigation = useNavigation()

    async function Cadastrar(name, password, email) {
        setLoading(true)
        if (name === '' || password === '' || email === '') {
            alert("Preencha todos os campos");
            return
        }
        try {

            const response = await api.post('/users', {
              name: name,
              password: password,
              email: email
                
                
            })
            console.log("Usuario cadastrado com sucesso" + response.data.name);
            
            navigation.goBack()
            setLoading(false)
           
        } catch (error) {
          console.log("Não foi possivel cadastrar o usuario" + error);
          setLoading(false)
          
        }
    }

  async function Logar(email, password) {
    setLoading(true)
    try {
      const response = await api.post('/login', {
        email: email,
        password: password
      })
      
      const {id, name, token} = response.data

      const data={
        id,
        name,
        token,
        email
      }

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      SetUser({
        id,
        name,
        email
      })
      
      console.log("Usuario logado com sucesso" + response.data.name);
    } catch (error) {
      console.log("Não foi possivel logar o usuario" + error);
      setLoading(false)
      
    }
  }
  return (
   <AuthContext.Provider value={{signed:!!user, user,Cadastrar,loading,Logar}}>
    {children}
   </AuthContext.Provider>
  )
}