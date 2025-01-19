import { Platform} from 'react-native'
import React from 'react'
import { Background,AreaInput,Container, SubmitButton, SubmitText } from './style'

export default function SignUp() {
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
        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}