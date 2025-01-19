import { View, Text } from 'react-native'
import React from 'react'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function AuthRoutes() {

    const AuthStack = createNativeStackNavigator()

  return (
    
      <AuthStack.Navigator
      >
        <AuthStack.Screen
        options={{headerShown:false}}
        name="SignIn" component={SignIn} />
        <AuthStack.Screen
        options={{headerStyle:{backgroundColor:'#3498db',borderBottomWidth:1,borderBottomColor:'#fff'},headerTintColor:'#fff',headerTitle:'Voltar', headerBackTitlevisible:false}}
        name="SignUp" component={SignUp}/>  

      </AuthStack.Navigator>
    
  )
}