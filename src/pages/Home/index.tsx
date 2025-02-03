
import React,{ useContext,useState,useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Area, Background, BalanceList, BtnLogOut, Container, Title } from './style'
import Header from '../../Components/Header'
import api from '../../services/services'
import {useIsFocused} from '@react-navigation/native'
import Balance from '../../Components/Balance'
import Icon from '@expo/vector-icons/Feather'

import { format } from 'date-fns'
import { TouchableOpacity } from 'react-native'




export default function Home() {
  const isFocused = useIsFocused()
  const { user, Sair } = useContext(AuthContext)

  const [listBalance, setListBalance] = useState([])

  const [date,setDate] = useState(new Date())

  useEffect(() =>{
    let isActive = true
    async function LoadListBalance() {
      const dateaFormated = format(date, 'dd/MM/yyyy')

      const response = await api.get(`/balance`,{
        params:{
          date: dateaFormated
        }
      })

      if(isActive){
        console.log(response.data);
        
        setListBalance(response.data)
      }

      
      

    }
    LoadListBalance()

    return () => {
      isActive = false
    }
  },[isFocused])


  return (
    <Background>
      
        <Header title="Minhas Movimentações"/>
        <BalanceList
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item})=>{
          
          return(
          <Balance data={item}/>
        )
          

        }}
        
        />
        <Area>
          <TouchableOpacity>
            <Icon name='calendar' color='#1d1c1c' size={30}/>
          </TouchableOpacity>
          <Title>Últimas Movimentações</Title>
        </Area>

        <BtnLogOut onPress={Sair}>
          <Title>Sair</Title>
        </BtnLogOut>
        

      
    </Background>
      )
}