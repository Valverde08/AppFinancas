import { Platform,ActivityIndicator} from 'react-native'
import React, {useContext, useState}from 'react'
import { Background,AreaInput,Container, SubmitButton, SubmitText } from './style'
import { AuthContext } from '../../Context/AuthContext'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {Cadastrar,loading} = useContext(AuthContext)



  return (
    <Background >
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <AreaInput
        placeholder="Nome"
        value={name}
        onChangeText={(text)=>setName(text)}
        />
        <AreaInput
        placeholder="Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}
        />
        <AreaInput
        placeholder="Senha"
        value={password}
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={true}
        
        />
        <SubmitButton
        onPress={()=>Cadastrar(name,password,email)}       
        >
          {loading ? (
            <ActivityIndicator size={20} color="#fff"/>
          ):(
            <SubmitText>Cadastrar</SubmitText>
          )}
         
        </SubmitButton>
      </Container>
    </Background>
  )
}