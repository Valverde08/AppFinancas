
import React,{useContext} from 'react'
import  Header  from '../../Components/Header/index'
import { Container,
  Title,
  ContentConteiner,
  StandardLabel,
  Btn } from './style'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigation } from '@react-navigation/native'



export default function Profile() {
  const navigation = useNavigation()

  const {user,Sair} = useContext(AuthContext)
  
  return (
    <Container>
        <Header title="Minhas Movimentações"/>

        <ContentConteiner>            
          <Title>Bem Vindo de Volta</Title>
          <StandardLabel cl={'#000'} numberOfLines={1}>{user.name}</StandardLabel>
          
          <StandardLabel cl={'#000'} numberOfLines={1}>Email: {user.email}</StandardLabel>
          

        </ContentConteiner>
          <Btn onPress={()=>navigation.navigate('Registrar')} bg={'#3b3dbf'} bc={'#3b3dbf'}>
            <StandardLabel cl={'#fff'}>Registrar Gastos</StandardLabel>
          </Btn>
          <Btn onPress={Sair}  bg={'#fff'} bc={'#ef463a'}>
            <StandardLabel cl={'#ef463a'}>Sair</StandardLabel>
          </Btn>
        
        
    </Container>
  )
}