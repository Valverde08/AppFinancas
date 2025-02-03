
import React, { useMemo } from 'react'
import { Container, Label, AccountBalance } from './style'

export default function Balance({data}) {

  const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
      return{
        label:'Saldo Atual',
        color:'#3b3dbf'
      }
    } else if(data.tag === 'receita'){
      return{
        label:'Entradas de hoje',
        color:'#0bb94a'
      }
    } else{
      return{
        label:'Saídas de hoje',
        color:'#ef463a'
      }
    }
  },[data])
  return (
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <AccountBalance>R${data.saldo}</AccountBalance>
    </Container>
  )
}