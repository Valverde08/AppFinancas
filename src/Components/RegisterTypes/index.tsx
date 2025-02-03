import AntDesign from '@expo/vector-icons/AntDesign';
import React,{useState} from 'react'
import { RegisterType, RegisterTypesContainer, RegisterTypeText } from './style'

export default function RegisterTypes({type,setTypeChange}) {
  const [typeChecked, setTypeChecked] = useState(type)

  function handeleSetTypeChange(item){
    setTypeChange(item)
    setTypeChecked(item)
  }
    
  return (
    <RegisterTypesContainer>
        <RegisterType 
        checked={typeChecked ===  'receita' ? true : false} 
        onPress={()=>handeleSetTypeChange('receita')
        }
        >
             <AntDesign name="arrowup" size={24} color="black" />
             <RegisterTypeText>Receita</RegisterTypeText>
        </RegisterType>
        <RegisterType
        checked={typeChecked === 'despesa' ? true : false} 
        onPress={()=>handeleSetTypeChange('despesa')}
        >
             <AntDesign name="arrowdown" size={24} color="black" />
             <RegisterTypeText>Despesa</RegisterTypeText>
        </RegisterType>
        
    </RegisterTypesContainer>
  )
}