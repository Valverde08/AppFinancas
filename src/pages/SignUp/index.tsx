import { Platform} from 'react-native'
import React, {useContext}from 'react'
import { Background,AreaInput,Container, SubmitButton, SubmitText } from './style'
import { AuthContext } from '../../Context/AuthContext'

export default function SignUp() {
const {user} = useContext(AuthContext)

  return (
    <Background >
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <AreaInput
        placeholder="Nome"
        />
        <AreaInput
        placeholder="Email"
        />
        <AreaInput
        placeholder="Senha"
        />
        <SubmitButton
        onPress={()=>{console.log(`Olá ${user.nome}`);
        }}
        >
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}