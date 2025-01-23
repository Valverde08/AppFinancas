import { Platform,ActivityIndicator} from 'react-native'
import React,{useState,useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../Context/AuthContext'

import { Background, Container, Logo, AreaInput,SubmitButton,SubmitText,
  Link,LinkText
 } from './style'

export default function SignIn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {Logar,loading} = useContext(AuthContext)

  const navigation = useNavigation()


  return (
    <Background >
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >

        <Logo
        source={require('../../Assets/Logo.png')}

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
        />
        <SubmitButton
        activeOpacity={0.7}
        onPress={()=>Logar(email,password)}        
        >
          {loading ? (
            <ActivityIndicator size={20} color="#fff"/>
          ):(<SubmitText>Entrar</SubmitText> )}
           
        </SubmitButton> 

        <Link
        onPress={()=>navigation.navigate('SignUp')}
        >
          <LinkText>Crie sua Conta!</LinkText>
        </Link>
      </Container>
      
    </Background>
  )
}