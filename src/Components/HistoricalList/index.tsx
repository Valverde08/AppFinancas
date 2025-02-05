
import React, { useMemo } from 'react'
import { Container,
   HistoricalText,
  TypeCOntainer,
  TypelText
  } from './style'

import Icon from '@expo/vector-icons/AntDesign'

export default function HistoricalList({data}) {

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

  return (
    <Container>
      <TypeCOntainer bg={labelType.color}>
        <Icon name={labelType.icon} size={24} color={'#fff'}/>
        <TypelText>{labelType.label}</TypelText>


      </TypeCOntainer>
        <HistoricalText>R$ {data.value}</HistoricalText>
        
    </Container>
  )
}