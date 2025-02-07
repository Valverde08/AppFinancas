
import React, { useMemo } from 'react'
import { Alert, TouchableWithoutFeedback } from 'react-native'
import { Container,
   HistoricalText,
  TypeCOntainer,
  TypelText
  } from './style'

import Icon from '@expo/vector-icons/AntDesign'


export default function HistoricalList({data, deleteItem}) {

  const labelType = useMemo(()=>{
    if(data.type === 'receita'){
      return{
        label:'Receita',
        color:'#0bb94a',
        icon:'arrowup'
      }
    }else{
      return{
        label:'Despesa',
        color:'#ef463a',
        icon:'arrowdown'
      }
    }
    

  },[])

  function confirmeDeletion(){
    Alert.alert(
       'Atenção',
       'Deseja apagar registro ?' ,
       [
        {
          text:'Cancelar',
          style:'cancel'
        },
        {
          text:'Continuar',
          onPress: () => deleteItem(data.id)
        }
       ]

    )
  }

  return (
    <TouchableWithoutFeedback onLongPress={confirmeDeletion}>
      <Container>
      

        <TypeCOntainer bg={labelType.color}>
          
          <Icon name={labelType.icon} size={24} color={'#fff'}/>
          <TypelText>{labelType.label}</TypelText>


        </TypeCOntainer>
          <HistoricalText>R$ {data.value}</HistoricalText>

     
      
        
    </Container>

    </TouchableWithoutFeedback>
    
  )
}