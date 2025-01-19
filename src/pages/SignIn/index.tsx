import { Platform} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Background, Container, Logo, AreaInput,SubmitButton,SubmitText,
  Link,LinkText
 } from './style'

export default function SignIn() {

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
        />
        <AreaInput
        placeholder="Senha"
        />
        <SubmitButton
        activeOpacity={0.7}
        onPress={()=>console.log("teste")
        }        
        >
          <SubmitText>Entrar</SubmitText>  
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