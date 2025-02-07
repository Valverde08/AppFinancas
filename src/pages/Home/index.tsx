
import React,{ useContext,useState,useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Area, Background, BalanceList, BtnLogOut, Container, Title, List } from './style'
import Header from '../../Components/Header'
import api from '../../services/services'
import {useIsFocused} from '@react-navigation/native'
import Balance from '../../Components/Balance'
import Icon from '@expo/vector-icons/Feather'
import HistoricalList from '../../Components/HistoricalList'

import { format } from 'date-fns'
import { TouchableOpacity,Modal } from 'react-native'
import ModalDate from '../../Components/ModalDate'




export default function Home() {
  const isFocused = useIsFocused()
  const { user, Sair } = useContext(AuthContext)
  const [listBalance, setListBalance] = useState([])
  const [movements,setMovements] = useState([])
  const [date,setDate] = useState(new Date())
  const [isActive,setIsactive] = useState(true)
  const [Modalvisible, setModalVisible]  = useState(false)


  useEffect(() =>{
    setIsactive(true)
    
    async function LoadListBalance() {
      
      const dateaFormated = format(date, 'dd/MM/yyyy')

      const receives = await api.get('/receives',{
        params:{
          date: dateaFormated
        }
      })

      const response = await api.get(`/balance`,{
        params:{
          date: dateaFormated
        }
      })

      if(isActive){
        console.log(response.data);

        setMovements(receives.data)
        setListBalance(response.data)
        setIsactive(false)
      }

      
      

    }
    LoadListBalance()

    return () => {
      setIsactive(false)
    }
  },[isFocused,movements])

  async function deleteItem(id) {

    try {
      await api.delete('receives/delete',{
        params:{
          item_id:id
        }
      })
      
    } catch (error) {
      console.log(error);
      
    }
    
  }


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
          <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <Icon name='calendar' color='#1d1c1c' size={30}/>
          </TouchableOpacity>
          <Title>Últimas Movimentações</Title>
        </Area>

        <List
        data={movements}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>{
          return(<HistoricalList data={item} deleteItem={deleteItem}/>)
        }}
        showsVerticalScrollIndicator={false}
        contentContainer={{paddingBottom:24}}
        />

        <Modal visible={Modalvisible} animationType='fade' transparent={true}>
          <ModalDate
          setVisible={()=> setModalVisible(false)}
          />
        </Modal>
        
        
        

      
    </Background>
      )
}