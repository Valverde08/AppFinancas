import { createContext, useEffect, useState } from 'react'
import React from 'react'
import api from '../services/services'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'




export const AuthContext = createContext({})



export default function AuthProvider({children}) {
    const [user, SetUser] = useState(null)
    const [ loading, setLoading] = useState(false)
    const [loadingIn, setLoadingIn] = useState(true)

    const navigation = useNavigation()

    useEffect(() => {

      async function LoadStorageData() {
        const storageUser = await AsyncStorage.getItem('@financa:usuario')
        

        if(storageUser ) {

          const response = await api.get('/me', {
            headers: {
              Authorization: `Bearer ${storageUser}`
            }
          })
          .catch((error) => {
            console.log("Não foi possivel logar o usuario" + error);
            SetUser(null)
            
          })

          

          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
          SetUser(response.data)
          setLoadingIn(false)
        }

        setLoadingIn(false)
      }

      LoadStorageData()

    }, []) 

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

      await AsyncStorage.setItem('@financa:usuario', token)

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

  async function Sair() {
    await AsyncStorage.clear().then(() => {
      SetUser(null)
    })


  }
  return (
   <AuthContext.Provider value={{signed:!!user, user,Cadastrar,loading,Logar,Sair,loadingIn}}>
    {children}
   </AuthContext.Provider>
  )
}