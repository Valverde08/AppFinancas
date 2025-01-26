
import React,{ useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Background, Container } from './style'
import Header from '../../Components/Header'




export default function Home() {
  const { user, Sair } = useContext(AuthContext)
  return (
    <Background>
      
        <Header title="Minhas Movimentações"/>
        

      
    </Background>
      )
}